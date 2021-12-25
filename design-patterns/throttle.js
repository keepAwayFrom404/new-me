function throttle(fun, time) {
  let timer, self = fun, firstTime = true
  return function() {
    const args = arguments,that = this
    if(firstTime) {
      self.apply(that, args)
      return firstTime = false
    }
    if(timer) {
      return false
    }
    timer = setTimeout(function(){
      clearTimeout(timer)
      timer = null
      self.apply(that, args)
    }, time || 500);
  }
}