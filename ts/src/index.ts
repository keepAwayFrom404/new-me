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
// interface Name {
//   firstName: string,
//   lastName: string,
// }
// const getFullName = ({firstName, lastName}: Name) => {
//   console.log(`${firstName} ${lastName}`);
//   return `${firstName} ${lastName}`
// }

// interface Vegetables {
//   color?: string,
//   type: string,
//   [prop: string]: any
// }
// const getVegetables = ({ color, type }: Vegetables) => {
//   console.log(`A ${color ? color + " " : ""}${type}`);
//   return `A ${color ? color + " " : ""}${type}`;
// };

// getVegetables({type: 'tomoto', size: 'big'})

// interface Role {
//   readonly 0: string,
//   readonly 1: string
// }

// const role: Role = {
//   0: 'super_admin',
//   1: 'admin'
// }

// type AddFunction = (num1: number, num2: number) => number;

// const add: AddFunction = (a, b) => a + b

/**
 * 接口高级用法
 */

// interface RoleDic {
//   readonly [id: number]: string
// }
// const role1: RoleDic = {
//   0: 'super_admin',
//   1: 'admin'
// }

// const role2: RoleDic = ['super_admin', 'admin']

// interface Vegetables {
//   color: string
// }

// interface Food {
//   type: string
// }

// interface Tomato extends Food, Vegetables {
//   radius: number
// }

// const tomato: Tomato = {
//   type: 'vegetable',
//   color: 'red',
//   radius: 1.2
// }

// interface Counter {
//   (): void;
//   count: number;
// }

// const getCount = (): Counter => {
//   const c = () => {
//     c.count ++
//   }
//   c.count = 0
//   return c
// }

// const counter: Counter = getCount()
// counter()
// console.log(counter.count);
// counter()
// console.log(counter.count);

/**
 * 函数
 */

// const add = (x1: number, x2: number = 2, x3?: number): number => x1 + x2 + (x3 as number)
// const handleData = (x1: number, ...x2: number[]) => {
//   return x2.reduce((pre, cur) => pre + cur, x1)
// }
// console.log(handleData(1, 2, 3,3));

// function reWrite(x: string): string[]
// function reWrite(x: number): string
// function reWrite(x: any): any {
//   if(typeof x === 'string') return x.split('')
//   else return x.toString().split('').join('_')
// }

// console.log(reWrite(123));

/**
 * 范型
 */
interface ValueWithLength {
  length: number
}
const getLength = <T extends ValueWithLength>(param: T): number => {
  return param.length
}

getLength({length: 2})
const getArray = <T, U>(value: T, value2: U, num: number = 5): [T, U][] => {
  return new Array(num).fill([value, value2])
}

getArray(2, 3).forEach(item => {
  console.log(item);
})

interface GetArray<T> {
  (arg: T, times: number): T[];
  tag: T
}

const getArr: GetArray<number> = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg)
}
getArr.tag = 123

getArr(123, 23)

const getProp = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}
const obj = {a: 'lee', b: 'jiahua'}
getProp(obj, "a")