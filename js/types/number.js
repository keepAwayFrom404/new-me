const a = 42.300
console.log(a);
const b = 5e10
console.log(b);
console.log(b.toExponential());
const c = 42.59
console.log(typeof c.toFixed(0));

// 42.toFixed(0) 无效是因为.被视为常量42.的一部分而没有.属性访问运算符调用toFixed

if(!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52)
}

function numberCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON
}

console.log(numberCloseEnoughToEqual(0.1+0.2,0.3));

console.log(Number.MAX_VALUE,Number.MIN_VALUE);

console.log(1 | 0);

let undefined  = 111
// let null = 111
console.log(undefined);

let d = undefined
console.log(d);

const e = 42

console.log(void e, e); // 如果需要将代码中的值（如表达式的返回值）设为undefined可以使用void操作符

// 因为安全数字范围为2^53-1 —— 2^53-1，所以有些数位操作只满足32位有符号整数

const f = 2 / 'foo'
const g = 'foo'
console.log(f === NaN);
console.log(NaN !== NaN);
console.log(isNaN(f));
console.log(isNaN(g)); // isNaN 判断过于死板，检查参数是否不是NaN，也不是数字，现在ES6可以使用Number.isNaN()
console.log(Infinity/Infinity);
console.log(1/Infinity);
console.log(-1/Infinity);
console.log(-0 - 0);

function isNegZero(n) {
  n = Number(n)
  return (n === 0) && (1 / n === -Infinity)

}
// -0存在的意义可以在动画中表示方向 

// ES6 Object.is() 判断两个值是否绝对相等
if(!Object.is) {
  Object.is = function(v1, v2) {
    // 判断 -0
    if(v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2 
    }
    // 判断NaN
    if(v1 !== v1) {
      return v2 !== v2
    }
    return v1 === v2
  }
}
/**
 * 简单值：基本类型的值都是通过值复制的方式来赋值/传递的；包括null、undefined、字符串、数字、布尔值、Symbol
 * 复合值：引用类型都是通过引用赋值进行赋值/传递，如函数和对象
 */
const h = [1,2,3]
function foo(x) {
  x.push(4)
  console.log(h);
  console.log(x);
  x = [4,5,6]
  x.push(7)
  console.log(h);
  console.log(x);
}
foo(h)
