// + 运算符转数字
const a = 42
console.log(typeof a.toString());
const b = '3.14'
console.log(typeof +b);
const c = 5
const d =+ c
console.log(d);
const timestamp = +new Date()
const timestamp2 = new Date().getTime()
const timestamp3 = Date.now()
console.log(timestamp);
console.log(timestamp2);
console.log(timestamp3);

// ～：只有与-1在一起返回0，其他返回真值
const e = 'Hello World'
console.log(~e.indexOf('lo'));
if(~e.indexOf('lo')) {
  // 找到
}
console.log(~e.indexOf('ol'));
if(!~e.indexOf('ol')) {
  // 没找到
}

// 字符串解析数字允许含有非数字字符，而转换不允许出现非数字字符否则会失败返回NaN
console.log(parseInt(1/0,19));
console.log(parseInt(new String(42)));

console.log(parseInt(0.000008));
console.log(parseInt(0.0000008));
console.log(parseInt(false, 16));
console.log(parseInt(parseInt, 16));
console.log(parseInt('0x10'));
console.log(parseInt('103', 2));
