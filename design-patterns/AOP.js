// 面向切面编程：把与核心业务无关的模块代码抽离，再通过动态编织的方式掺入业务代码中

Function.prototype.before = function(beforeFn) {
  return () => {
    beforeFn.apply(this, arguments)
    return this.apply(this, arguments)
  }
}
Function.prototype.after = function(afterFn) {
  return () => {
    let res = this.apply(this, arguments)
    afterFn.apply(this, arguments)
    return res
  }
}

let fun = function() {
  console.log(2)
}

fun = fun.before(function() {
  console.log(1)
}).after(function() {
  console.log(3)
})

fun()