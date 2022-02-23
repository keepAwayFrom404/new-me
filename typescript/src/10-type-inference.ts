// 隐式类型推断：未声明类型，ts会自动推断，建议为每个变量添加明确的类型

export {}
let age = 123
// age = '123' // 失败，类型被推断为number

let foo

foo = 100

foo = 'string'