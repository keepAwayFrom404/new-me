// 计算乘积
const mult = function() {
  let a = 1
  for(let i = 0,l = arguments.length;i < l;i ++) {
    a = a * arguments[i]
  }
  return a
}
// 计算加和
const plus = function() {
  let a = 1
  for(let i = 0,l = arguments.length;i < l;i ++) {
    a = a + arguments[i]
  }
  return a
}
// 缓存工厂
const createProxyFactory = function(fn) {
  const cache = {}
  return function() {
    const args = Array.prototype.join.call(arguments, ',')
    if(args in cache) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

const proxyMult = createProxyFactory(mult)
const proxyPlus = createProxyFactory(plus)

console.log(proxyMult(1,2,3,4));
console.log(proxyMult(1,2,3,4));
console.log(proxyPlus(1,2,3,4));
console.log(proxyPlus(1,2,3,4));