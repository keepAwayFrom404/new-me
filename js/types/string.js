const a = 'foo'
const b = ['f','o','o']
const c = Array.prototype.map.call(a, (v) => {
  return v.toUpperCase() + '.'
}).join('')
console.log(c);

console.log(b.reverse());
// reverse 改变的是原值，而string原值不可变，随意无法借用数组的可变更成员函数(还有splice)
// const d = Array.prototype.reverse.call(a) 
const d = a.split('').reverse().join('') 
const e = '\u2665'
console.log(e);
const f = e.split('').reverse().join('') // 对于包含复杂字符（Unicode、星号、多字节字符）的字符串不适用（Esrever库解决）
console.log(f);
