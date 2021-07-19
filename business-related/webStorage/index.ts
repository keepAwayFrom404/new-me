/**
 * storage事件不触发：无论何时，Storage 对象发生变化时（即创建/更新/删除数据项时，重复设置相同的键值不会触发该事件，Storage.clear() 方法至多触发一次该事件），StorageEvent 事件会触发。在同一个页面内发生的改变不会起作用——在相同域名下的其他页面（如一个新标签或 iframe）发生的改变才会起作用。在其他域名下的页面不能访问相同的 Storage 对象。
 */

interface StorageBootStrapConfig {
  mode: "session" | "local";
  timeout: number;
}

interface StorageData {
  timestamp: number;
  data: any;
}

class CustomStorage {
  private readStorage: Storage;
  private quota: number;
  private usage: number;
  private config: StorageBootStrapConfig;
  constructor() {
    this.usage = 0;
    this.quota = 0;
    if (!window) throw new Error("当前环境非浏览器，无法使用storage！");
    if (!window.localStorage) throw new Error("当前环境无法使用localStorage");
    if (!window.sessionStorage)
      throw new Error("当前环境无法使用sessionStorage");
    this.readStorage = window.localStorage;
    this.config = {
      mode: "local",
      timeout: 3000,
    };
  }

  /**
   * 初始化Storage的配置
   * @param config StorageBootStrapConfig
   */
  bootStrap(config: StorageBootStrapConfig): void {
    switch (config.mode) {
      case "session":
        this.readStorage = window.sessionStorage;
        break;
      case "local":
        this.readStorage = window.localStorage;
        break;
      default:
        throw new Error("请传入mode配置选择使用的storage");
    }
    this.config = config;
  }
  /**
   * 设置存储项
   * @param key
   * @param value
   */
  setItem(key: string, value: any): void {
    if (canStringify(value)) {
      
      const saveData: StorageData = {
        timestamp: Date.now(),
        data: value,
      };
      const dataStr = JSON.stringify(saveData)
      this.checkStorageSpace(sizeOf(dataStr, ''));
      this.readStorage.setItem(key, dataStr);
    } else {
      throw new Error("需要存储的数据不支持JSON.stringify，请检查数据。");
    }
  }
  /**
   * 获取数据项
   * @param key
   * @returns 当前项的值
   */
  getItem<T>(key: string): T | null {
    const content: StorageData = JSON.parse(
      this.readStorage.getItem(key) || "{}"
    );
    if (
      content.timestamp &&
      Date.now() - content.timestamp >= this.config.timeout
    ) {
      this.removeItem(key);
      return null;
    }
    return content.data || null;
  }

  /**
   * 移除指定key值
   * @param key
   */
  removeItem(key: string): boolean {
    if (this.hasItem(key)) {
      this.readStorage.removeItem(key);
      return true;
    }
    return false;
  }

  /**
   * 修改当前存储内容数据
   * @param key
   * @param onChange
   * @param baseValue
   */
  changeItem<T>(
    key: string,
    onChange: (oldValue: T) => T | null,
    baseValue: any
  ) {
    const data = this.getItem<T>(key);
    this.setItem(key, onChange(data || baseValue));
  }

  /**
   * 判断key值是否存在
   * @param key
   * @returns
   */
  hasItem(key: string): boolean {
    return this.readStorage.hasOwnProperty(key);
  }

  /**
   * 清除所有数据
   */
  clearAll(): boolean {
    this.readStorage.clear();
    return true;
  }

  /**
   * 返回当前storage的长度
   * @returns
   */
  size(): number {
    return this.readStorage.length;
  }

  /**
   * 获取所有的key
   * @returns
   */
  getKeys(): Array<string> {
    return Object.keys(this.readStorage);
  }

  /**
   * 获取所有的value
   * @returns
   */
  getValues(): Array<any> {
    return Object.values(this.readStorage);
  }

  /**
   * 获取按时间顺序排序的storage
   * @returns
   */
  getTimeSortStorage() {
    const keys: string[] = this.getKeys();
    const temp: Array<{
      key: string;
      data: StorageData;
    }> = [];
    keys.forEach((name) => {
      const item: any = this.getItem(name);
      if (item.timestamp) {
        temp.push({
          key: name,
          data: item,
        });
      }
    });
    return temp.sort((a, b) => a.data.timestamp - b.data.timestamp);
  }

  checkStorageSpace(curSize: number) {
    while (
      this.quota - this.usage <= curSize &&
      this.getTimeSortStorage().length
    ) {
      // 小于需要内存，进行清理
      const { key } = this.getTimeSortStorage()[0] || {}; // 每次清理第一个
      this.removeItem(key);
      this.initCacheSize();
    }
  }

  async initCacheSize() {
    if (navigator && navigator.storage) {
      const { quota = 0, usage = 0 } = await navigator.storage.estimate();
      this.quota = quota;
      this.usage = usage;
    }
  }
}

function canStringify(data: any): boolean {
  if (data === void 0) return false;
  if (data instanceof Function) return false;
  if (isSymbol(data)) return false;
  return true;
}

function isSymbol(val: any): boolean {
  return typeof val === "symbol";
}

/**
 * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
 * 
 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
 * 000800 - 00D7FF 
   00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
  * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
  * 
  * 注: Unicode在范围 D800-DFFF 中不存在任何字符
  * {@link http://zh.wikipedia.org/wiki/UTF-8}
  * 
  * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
  * 000000 - 00FFFF  两个字节
  * 010000 - 10FFFF  四个字节
  * 
  * {@link http://zh.wikipedia.org/wiki/UTF-16}
  * @param  {String} str 
  * @param  {String} charset utf-8, utf-16
  * @return {Number}
  */
function sizeOf(str: string, charset: string) {
  var total = 0,
    charCode,
    i,
    len;
  charset = charset ? charset.toLowerCase() : "";
  if (charset === "utf-16" || charset === "utf16") {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0xffff) {
        total += 2;
      } else {
        total += 4;
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0x007f) {
        total += 1;
      } else if (charCode <= 0x07ff) {
        total += 2;
      } else if (charCode <= 0xffff) {
        total += 3;
      } else {
        total += 4;
      }
    }
  }
  return total;
};
