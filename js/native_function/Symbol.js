const mySym = Symbol('my own symbol')
console.log(mySym);
console.log(mySym.toString());
console.log(typeof mySym)
const a = {};
a[mySym] = 'foobar' // 比较喜欢用来代替_前缀的属性作为私有或特殊属性
console.log(Object.getOwnPropertySymbols(a));
console.log(a);

// apply call bind都在Function.prototype上