const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [4, 5, 6]

function sum(...args: number[]) {
  return args.reduce((pre, cur) => pre + cur, 0)
}

sum(1,2,3,)