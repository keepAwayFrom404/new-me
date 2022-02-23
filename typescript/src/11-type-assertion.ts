// 类型断言（编译时概念）：告诉ts明确一个值的类型，不是类型转换（运行时概念）

export {}

const nums = [123, 234,345]
// 此时res为number ｜ undefined
const res = nums.find(i => i> 0) 

const num1 = res as number // 推荐写法

const num2 = <number>res // jsx与标签冲突