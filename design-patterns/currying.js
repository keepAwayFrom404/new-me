// 柯里化：惰性求值
const Currying = function(fn) {
  const args = []
  return function() {
    if(arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

const Cost = (function() {
  let count = 0
  return function() {
    for (let i = 0;len = arguments.length,i < len; i++) {
      count+=arguments[i]
    }
    return count
  }
})()

const cost = Currying(Cost)
cost(100)
cost(200)
cost(300)
console.log(cost())

// uncurrying：借用方法
Function.prototype.uncurrying = function() {
  const that = this
  return function() {
    const obj = Array.prototype.shift.call(arguments) // 第一个参数：即借用方法的对象
    return that.apply(obj, arguments)
  }
}

const push = Array.prototype.push.uncurrying()
const obj = {0: '1', length: 1}
push(obj, 2)