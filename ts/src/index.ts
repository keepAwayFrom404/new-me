// // 元组 定长数组
// let tuple: [number, string, boolean] = [1,'22',false]

// // 枚举
// enum Roles {
//   admin,
//   super_admin,
//   user
// }
// const superAdmin = Roles.super_admin

// // void 没有类型，函数返回值
// const consoleText = (text: string): void => {
//   console.log(text);
// }
// // consoleText('hello ts')

// const arr: (string[]|number[]) = ['111','123']
// const h1 = document.createElement('h1')
// h1.innerHTML = 'hello TS'
// document.body.appendChild(h1)

// const key1: unique symbol = Symbol()
// let key2: symbol = Symbol('lee')
// const obj = {
//   [key1]: 'value1',
//   [key2]: 'value2',
// }
// const start = 1
// enum Index {
//   a = start,
//   b = 2,
//   c,
// }
// const d =  Index.c

// enum Status {
//   Success = 200,
//   NotFound = 404,
//   Error = 500
// }

// enum E {
//   A,
//   B,
// }
// const getIndex = (enumObj: {A: number}): number => {
//   return enumObj.A
// }


const getLength = (target: number | string): number => {
  if((target as string).length) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}