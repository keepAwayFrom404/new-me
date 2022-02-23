/**
 * @param {Number} t 动画已经持续的时间 
 * @param {Number} b 动画初始位置 
 * @param {Number} c 动画运动距离 
 * @param {Number} d 动画持续时间
 */
const tween = {
  linear: function(t, b, c, d) {
    return c * t / d + b
  },
  easeIn: function(t, b, c, d) {
    return c * (t /= d) * t + b
  },
  strongEaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + 1 + b
  },
  strongEaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  },
  sineaseIn: function(t, b, c, d) {
    return c * (t /= d) * t * t + b
  },
  sineaseOut: function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  },
}

const Animate = function(dom) {
  this.dom = dom // 运行动画的节点
  this.startTime = 0 // 开始时间
  this.startPos = 0 // 动画开始时dom位置，起始位置
  this.endPos = 0 // 动画结束时dom位置，目标位置
  this.properyName = null // 需要被改变的css属性
  this.easing = null // 缓动算法
  this.duration = null // 动画持续时间
}
/**
 * 启动动画
 * @param {String} properyName 
 * @param {Number} endPos 
 * @param {Number} duration 
 * @param {String} easing 
 */
Animate.prototype.start = function(properyName, endPos, duration, easing) {
  this.startTime = +new Date
  this.startPos = this.dom.getBoundingClientRect()[properyName]
  this.properyName = properyName
  this.endPos = endPos
  this.duration = duration
  this.easing = tween[easing]
  const timeId = setInterval(() => {
    if(this.step() === false) {
      clearInterval(timeId)
    }
  }, 19);
}

Animate.prototype.step = function() {
  let t = +new Date
  if(t > this.startTime + this.duration) { // 结束之后调整位置
    this.update(this.endPos)
    return false
  }
  const pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration)
  this.update(pos)
}

Animate.prototype.update = function(pos) {
  this.dom.style[this.properyName] = pos + 'px'
}
