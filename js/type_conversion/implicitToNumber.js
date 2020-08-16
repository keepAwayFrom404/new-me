// 如果“+”操作符中的一个操作数是字符串（或通过以上两步：你不知js中69页转为字符串），则执行字符串拼接，否则执行数字加法
// 坑
console.log([] + {});
console.log({} + []); // 之前会返回0

console.log(typeof (42+''));
const a = 42
console.log(a + ''); // 会对a先调用valueOf，然后通过toString将返回值转为字符串，a是对象而非数字结果可能不一样
console.log(String(a)); // 直接调用toString

const b = {
  valueOf: function() {
    return 42
  },
  toString: function() {
    return 4
  }
}
console.log(b + '');
console.log(String(b));
const c = '3.14'
console.log(typeof (c - 0));
console.log([2] - [1]);