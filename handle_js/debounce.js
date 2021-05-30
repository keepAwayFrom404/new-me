/**
 * 防抖函数：事件触发n秒后再触发回调，如果n秒内又被触发则重新计时
 * 使用场景：
 * （1）search联想
 * （2）window的resize
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
