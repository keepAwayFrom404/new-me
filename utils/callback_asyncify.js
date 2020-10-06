// callback全部使用异步
function asyncify(fn) {
  const orign_fn = fn
  let intv = setTimeout(() => {
    intv = null
    if(fn) fn
  }, 0);

  fn = null

  return function() {
    if(intv) { // 触发过快，在异步转换发生之前
      fn = orign_fn.bind.apply(orign_fn, [this].concat([].slice.call(arguments)))
    } else {
      orign_fn.apply(this, arguments)
    }
  }
}