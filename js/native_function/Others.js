function isThisCool(vals, fn, rx) {
  vals = vals || Array.prototype
  fn = fn || Function.prototype
  rx = rx || new RegExp()
  return rx.test(vals.map(fn).join(''))
}
console.log(isThisCool());
console.log(isThisCool(['a','b','c'], function(v) {return v.toUpperCase()}, /D/));