const arr = [1, 2, 3]
console.log(arr.toString());
// 不安全的JSON值有：undefined、function、Symbol、循环引用
console.log(JSON.stringify(42));
console.log(JSON.stringify('42'));
console.log(JSON.stringify(null));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1,undefined,function() {},4]));
console.log(JSON.stringify({a: 2, b: function(){}}));
const o = {}
const a = {
  b: 42, 
  c: o,
  d: function(){}
}
o.e = a
a.toJSON = function() {
  return {b: this.b}
}
console.log(JSON.stringify(a));

const b = {
  b: 42,
  c: '42',
  d: [1,2,3]
}
console.log(JSON.stringify(b, ['b','c']));
console.log(JSON.stringify(b, function(k,v) {
  console.log(k)
  if(k !== 'c') return v
}));

console.log(JSON.stringify(b,null,3));
console.log(JSON.stringify(b,null,'-----'));