const a = new String('hello world')
const b = 'hello world'
console.log(a); //  在各代浏览器中展示不同
console.log(typeof b);

console.log(Object.prototype.toString.call(a)); // typeof 返回为object的对象都有一个[[class]]内部属性

const c = 'abc'
const d = new String('abc') // 封装
const e = Object('abc')
console.log(d instanceof String);
console.log(e instanceof String);

// 拆封使用valueOf

const f = new String('abc')
const g = new Number(42)
const h = new Boolean(true)
console.log(f.valueOf());
console.log(g.valueOf());
console.log(h.valueOf());

const i = f + '1' // 隐式拆箱
console.log(i);