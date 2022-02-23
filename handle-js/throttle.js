/**
 * 节流：规定单位时间只触发一次，如果触发多次，只有一次生效。
 * 使用场景：
 * （1）鼠标不断点击
 * （2）监听滚动事件
 * @param {*} fun 
 * @param {*} time 
 */
function throttle(fun, time) {
  let previous = 0
  return function() {
    const that = this
    const args = arguments
    const now = Date.now()
    if(now - previous > time) {
      fun.apply(that, args)
      previous = now
    }
  }
}

/**
 * 与第一版的主要区别：
 * （1）第一次不会触发
 * （2）停止触发之后依然会再执行一次
 */
function throttle2(fun, time) {
  let timer
  return function() {
    if(!timer) {
      const that = this
      const args = arguments
      timer = setTimeout(() => {
        fun.apply(that, args)
        timer = null
      }, time);
    }
  }
}
/**
 * 首次会立即触发
 * 停下之后会触发一下
 */
function throttle4(func, time) {
  let timer,last // 通过now和last差值设置间隔time的定时器
  return function() {
    const that = this
    const args = arguments
    const now = Date.now()
    // now < last + time大于time相当于再次触发，首次还是立即执行
    if(last && now < last + time) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        func.apply(that, args)
      }, time);
    } else { // 第一次触发
      last = now
      func.apply(that, args)
    }
  }
}