// callback完全不调用
function timeoutify(fn, delay) {
  let intv = setTimeout(() => {
    intv = null
    fn(new Error('Timeout!'))
  }, delay);
  return function () {
    if(intv) {
      clearTimeout(intv)
      fn.apply(this, arguments)
    }
  }
}