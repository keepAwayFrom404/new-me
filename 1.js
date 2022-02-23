function sumAsync(...args) {
  const originalArgs = args
  if(originalArgs.length === 2) return sum(...args)
  const tempArgs = args.splice(0, 2)
  const tempSum = sum(...tempArgs)
  originalArgs.push(tempSum)
  return sumAsync(...originalArgs)
}

function sum(a,b) {
  return a + b
}

console.log(sumAsync(1,2,3,4,5));