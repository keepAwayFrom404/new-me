function asyncify(fn) {
  const orig_fn = fn
  let intv = setTimeout(() => {
    intv = null
    if(fn) fn()
  }, 0);
  fn = null
  return function() {
    if(intv) {
      fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice,call(arguments)))
    } else {
      // 已经是异步的
      orig_fn.apply(this, arguments)
    }
  }
}