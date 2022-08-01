# 模块化 
## commonjs
### 优点
1. 复用
2. 按需加载
3. 可维护
### 基础
1. require： 使用require会自动补全文件名，且导入的一定是module.exports共享的对象
2. modele.exports 与 exports指向的是同一对象，最终以module.exports共享对象为主
3. 导出modele.exports与exports不要混用
### 模块加载机制
1. 优先从缓存加载，多次require不会多次执行
2. 内置模块优先级是最高的
3. 扩展名补充js-json-node-加载失败
4. 文件加载从当前目录node_modules到根目录node_modules
5. 文件加载查找package.json的main属性对应的入口文件，如不存在试图加载index.js，否则加载失败
