if(!Object.is) {
  Object.is = function(x, y) {
    if(x === y) {
      // 处理+-0
      return x !== 0 || 1 / x === 1 / y
    } else {
      // 处理NaN
      return x !== x && y !== y
    }
  }
}