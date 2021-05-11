function myInstaceOf(left, right) {
  let tempRight = right.prototype // 右侧的原型
  let tempLeft = left.__proto__ // 如果是right实例，left的__proto__链会有等于right的prototype的值
  while(true) {
    if(tempLeft === null) return false
    if(tempRight === tempLeft) return true
    tempLeft = tempLeft.__proto__
  }
}