/**
 * （1）比较双方先调用ToPrimitive，如果结果出现非字符串，就根据ToNumber规则将双方强制类型转换为数字进行比较
 * （2）如果双方都是字符串则按照字母顺序比较
 */
const a = [42]
const b = ['43']
console.log(a < b);

const c = ['42']
const d = ['043']
console.log(c < d);

const e = {b:42}
const f = {b:43}
console.log(e < f);
console.log(e == f);
console.log(e > f);
console.log(e <= f); // 等价于e < f，然后将结果反转；实际并不是小于或等于而是不大于，处理为!(e < f)
console.log(e >= f);

// 比较之前进行显示转换