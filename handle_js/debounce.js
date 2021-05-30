/**
 * 防抖函数：性能优化，对于高频触发事件，只在事件间隔多久之后执行
 * @param {Function} fun 执行函数 
 * @param {Number} time 间隔时间
 * @param {*} immediate 是否立即触发
 * @returns 
 */
function debounce(fun, time, immediate) {
  let timer
  const temp = function() {
    const that = this
    const args = arguments
    if(timer) clearTimeout(timer)
    if(!timer && immediate) {
      // 只有立即执行才有返回值
      const result = fun.apply(this, args)
      timer = true
      return result
    }
    timer = setTimeout(() => {
      fun.apply(that, args)
    }, time);
  }
  temp.cancel = function() {
    timer && clearTimeout(timer)
    timer = false
  }
  return temp
}
