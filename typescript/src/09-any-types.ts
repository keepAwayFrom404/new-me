// any类型主要用于兼容老代码，可以存放任意类型，不会进行类型检查，所以是不安全的，减少使用

function stringify(value: any) {
  return JSON.stringify(value)
}

let foo:any = 'string'

foo.bar()