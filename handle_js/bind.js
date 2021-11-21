function myBind1(fn, obj) {
  return function() {
    fn.apply(obj, arguments)
  }
}

function myBind(target) {
  if(typeof this !== 'function') {
    throw new typeError(`调用bind的不是一个函数`)
  }
  const args = Array.prototype.slice.call(arguments, 1)
  const that = this
  const tempFun = function () {}
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
    return that.apply((!this||this===(window || global))?obj:this, args.concat.apply(args, arguments))
  }
  bound.prototype = Object.create(that.prototype)
  return bound
}