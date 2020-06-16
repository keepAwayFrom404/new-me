function isRelatedTo(a1,a2) {
  function F(){}
  F.prototype = a2
  return a1 instanceof F
}
const a = {}
const b = Object.create(a)

Object.create = function(o) {
  function F() {}
  F.prototype = o
  return new F()
}