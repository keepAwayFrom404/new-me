const a = 42.300
console.log(a);
const b = 5e10
console.log(b);
console.log(b.toExponential());
const c = 42.59
console.log(typeof c.toFixed(0));

// 42.toFixed(0) 无效是因为.被视为常量42.的一部分而没有.属性访问运算符调用toFixed