/**
 * bind的polyfill写法
 * @param {any} target 绑定的对象 
 * @returns 
 */
function myBind(target) {
  if(typeof this !== 'function') {
    throw new typeError(`调用bind的不是一个函数`)
  }
  const args = Array.prototype.slice.call(arguments, 1) // 绑定时传递的参数
  const that = this // 调用当前函数的函数
  const tempFun = function () {} // 用于判断是否new调用
  const res = function() {
    return that.apply((this instanceof tempFun && target ? this : target), args.concat(Array.prototype.slice.call(arguments)))
  }
  tempFun.prototype = this.prototype
  res.prototype = new tempFun()
  
  return res
}


function softBind(obj) {
  const that = this
  const args = [].slice.call(arguments, 1)
  const bound = function() {
    // 如果this是默认绑定则绑定到obj，否则使用用户定义的绑定（隐式、显示或new）
    return that.apply((!this||this===(window || global))?obj:this, args.concat.apply(args, arguments))
  }
  bound.prototype = Object.create(that.prototype)
  return bound
}