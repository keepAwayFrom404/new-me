function debounce(fun, time) {
  let timer
  return function () {
    const that = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(that, args)
    }, time);
  }
}

function throttle(fun, time) {
  let last, timer
  return function() {
    const that = this
    const args = arguments
    const now = Date.now()
    if(last && time > now - lat) {
      clearTimeout(timer)
      setTimeout(() => {
        last = now
        fun.apply(that, args)
      }, time);
    } else {
      last = now
      fun.apply(that, args)
    }
  }
}