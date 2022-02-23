
// 题目2：给定一个整数数组，循环查找该数组中每个数字后的第一个比当前数字大的数字，找不到则输出-1，找到则输出对应的数字，可循环查找。返回新数组。
4315
// 例如[1, 5, 3, 4]，输出[5, -1, 4, 5]
function test(...args) {
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    const argsCopy = [...args]
    // const idx = args.length-1
    argsCopy.splice(i, 1)
    console.log(argsCopy, 'afterArr ====>');
    let flat = false
    for (let j = 0; j < argsCopy.length; j++) {
      const item = argsCopy[j];
      if(item > element) {
        args[i] = item
        flat = true
        break
      }
    }
    !flat && (args[i] = -1)
  }
  return args
}
console.log(test(1, 5, 4, 3));
