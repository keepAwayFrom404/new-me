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


/**
 * Symbol
 */
// const key1: unique symbol = Symbol()
// let key2: symbol = Symbol('lee')
// const obj = {
//   [key1]: 'value1',
//   [key2]: 'value2',
// }

/**
 * 枚举类型：enum
 */
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

/**
 * 类型断言
 */
// const getLength = (target: number | string): number => {
//   if((target as string).length) {
//     return (target as string).length
//   } else {
//     return target.toString().length
//   }
// }

/**
 * 接口
 */
interface Name {
  firstName: string,
  lastName: string,
}
const getFullName = ({firstName, lastName}: Name) => {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`
}

interface Vegetables {
  color?: string,
  type: string,
  [prop: string]: any
}
const getVegetables = ({ color, type }: Vegetables) => {
  console.log(`A ${color ? color + " " : ""}${type}`);
  return `A ${color ? color + " " : ""}${type}`;
};

getVegetables({type: 'tomoto', size: 'big'})

interface Role {
  readonly 0: string,
  readonly 1: string
}

const role: Role = {
  0: 'super_admin',
  1: 'admin'
}

type AddFunction = (num1: number, num2: number) => number;

const add: AddFunction = (a, b) => a + b