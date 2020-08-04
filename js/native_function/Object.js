const a = new Object()
a.foo = 'bar'
console.log(a);
const b = {foo: 'bar'}
console.log(b);
const c = new Function('a', 'return a * 2')
const d = function(a) {
  return a * 2
}
function e (a) {
  return a * 2
}
console.log(c, d, e);
const f = new RegExp('^a*b+', 'g')
const g = /^a*b+/g // 这种形式引擎在代码执行前会预编译和缓存

const name = 'Kyle'
const namePattern = new RegExp(`\\b(?:)${name}\\b`, 'ig')
const matchs = name.match(namePattern)
console.log(matchs);
