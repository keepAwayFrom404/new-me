// 函数声明
function func1(a: number, b: number, ...rest: number[]): string {
  return '123'
}

func1(1,2)


const func2: (a: number, b: number, ...rest: number[]) => string = function(a: number, b: number, ...rest: number[]): string {
  return '123'
}

func2(1,2,3,4)