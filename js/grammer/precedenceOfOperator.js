// ","优先级低于一切
const a = 42
const b = 'foo'
const c = false
console.log(false && true || true);
console.log(true || false && false); // true: &&优先级高于｜｜且都是左关联
console.log(a && b || c ? c ||b ? a : c && b : c); // || 高于 ？：;
console.log(true?false:true?true:true); // false ?:运算符是右关联的
let d,e,f
d = e = f = 42
console.log(d,e,f); // =号也是右关联的

//综上a && b || c ? c ||b ? a : c && b : c等价于((a && b) || c) ? ((c || b) ? a : (c && b)) : c