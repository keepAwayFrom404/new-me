/**
 * 对象深拷贝：
 * 思路：
 * （1）首先实现对象的浅拷贝
 * （2）通过传入的值是对象还是基本类型进行分别处理
 * （3）考虑数组类型
 * （4）处理循环引用：实现思路可以添加新的Map对已经克隆的值做一个映射
 * （5）把拷贝的数据分类，将类型分为可遍历和不可遍历
 * 优化点：（1）使用WeakMap替换Map，key值为对象的弱引用，不会影响垃圾回收
 * （2）遍历性能优化：while > for循环 > for...in
 */

const { myForEach, getType, isObject, getOriginInstance } = require('./utils')

const deepCloneTag = ['Array', 'Object', 'Map', 'Set']
function deepClone(obj, map = new WeakMap()) {
  if(isObject()) {
    const type = getType(obj)
    let tempObj
    if(deepCloneTag.includes(type)) {
      tempObj = getOriginInstance(obj)
    }

    // 处理循环引用
    if(map.get(obj)) return map.get(obj)
    map.set(obj, tempObj)

    const keys = type === 'Array' ? undefined : Object.keys(obj)
    myForEach(keys || obj, (val, idx) => {
      if(keys) idx = val
      tempObj[idx] = deepClone(obj[idx], map)
    })

    if(type === 'Set') {
      obj.forEach(value => {
        tempObj.add(deepClone(value,map));
      });
      return tempObj;
    }

    if(type === 'Map') {
      obj.forEach((value, key) => {
        tempObj.set(key, deepClone(value,map));
      });
      return tempObj;
    }

    return tempObj
  } else { // 基本类型直接返回
    return obj
  }
}

let set = new Set([1,2,2])
let map = new Map([['a', 1]])
const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
};

console.log(deepClone(target));


// const cloneTarget = deepClone(target)
// // cloneTarget.field4.child[0] = 3
// console.log(target,cloneTarget);

