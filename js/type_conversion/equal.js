/**
 * "==" 允许在相等的情况下进行强制类型转换，而"==="不允许
 * （1）当类型相同时，仅比较他们是否相等；特例：NaN、+0与-0
 * （2）在比较对象时表现一致
 * （3）字符串和数字之间的相等比较
 *  - Type(x)是数字，Type(y)是字符串，返回x == ToNumber(y)的结果
 *  - Type(x)是字符串，Type(y)是数字，返回ToNumber(x) == y的结果
 * （3）其他类型与布尔值比较
 *  - Type(x)是布尔值，返回ToNumber(x) == y的结果
 *  - Type(y)是布尔值，返回x == ToNumber(y)的结果
 * （4）null和undefined之间的相等比较
 *  - 如果x为null，y为undefined，结果为true
 *  - 如果x为undefined，y为null，结果为true
 *  （5）对象和非对象之间的相等比较（没加布尔值是因为它会先强制类型转换为数字）
 *  - Type(x)是数字或者字符串，Type(y)是对象，返回x == ToPrimitive(y)的结果
 *  - Type(x)是对象，Type(y)是数字或者字符串，返回ToPrimitive(x) == y的结果
 */

 console.log({} == {});
 console.log(1 ==  [1]);
 const a = 'abc'
 const b = Object('abc')
 console.log(a === b);
 console.log(a == b);

 const c = null
 const d = Object(c)
 console.log(c == d);
 const e = undefined
 const f = Object(e)
 console.log(e == f);
 const g = NaN
 const h = Object(g)
 console.log(g == h); // NaN !==  NaN

 let i = 2
 Number.prototype.valueOf = function() {
   return i++
 }
 const j = new Number(42)
 if(j == 2 && j == 3) {
   console.log(`yep, this happen`);
 }

 console.log('0' == false);
 console.log(false == '');
 console.log(false == []);
 console.log('' == 0);
 console.log('' == []);
 console.log(0 == []);
 console.log([] == ![]);
 console.log(0 == '\n');

 // 数组的valueOf返回数组本身


 /**
  * 重点：
  * （1）如果两边的值有true和false，千万不要使用“==”
  * （2）如果两边的值有[]、""、或者0尽量不要使用“==”
  */