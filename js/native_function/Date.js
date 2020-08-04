const a = new Date()
const b = Date()
console.log(a, b);

if(!Date.now) {
  Date.now = function() {
    return (new Date()).getTime()
  }
}
function foo(a) {
  if(!a) {
    throw new Error("a wasn't provided")
  }
}