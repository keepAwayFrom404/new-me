// 范型：定义时不置顶具体类型，使用时再指定，为了最大程度复用代码；对于定义是不能确定的类型参数使用范型，在使用时当作确认并传入 

export {}

function createNumberArray(length: number, value: number):number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}
function createStringArray(length: number, value: string):string[] {
  const arr = Array<string>(length).fill(value)
  return arr
}

function createArray<T>(length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res = createNumberArray(3, 100)

const res1 = createArray<string>(3, '100')