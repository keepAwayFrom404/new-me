/**
 * 注意：十六进制会按十进制转换
 * 对象会先检查内部的defaultValue是否有valueOf方法，如果有并返回基本类型则调用valueOf转换，如果没有就使用toString的返回值，都不返回基本类型则产生TypeError错误
 * Object.create(null)创建的对象[[prototype]]为null，所以没有valueOf或者toString
 */ 
const a = {
  valueOf: function() {
    return '42'
  }
}

const b = {
  toString: function() {
    return '42'
  }
}
const c = [4,2]

c.toString = function() {
  return this.join('')
}

console.log(Number(a));
console.log(Number(b));
console.log(Number(c));
console.log(Number(''));
console.log(Number([]));
console.log(Number(['abc']));
