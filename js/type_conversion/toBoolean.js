/**
 * js中的值分为两类：可以被强制转换为false的值和其他（可以被强制转换为true的值）
 * 强制转换为假值有以下值：undefined、null、false、+0、-0、0、NaN、""，可以理解为其他都是真值
 */
console.log(Boolean(NaN));
const a = new Number(0)
const b = new String("")
const c = new Boolean(false)
const d = Boolean(a && b && c)
console.log(d);
// console.log(document.all); // false