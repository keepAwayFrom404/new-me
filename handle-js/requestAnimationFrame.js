(function () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (let x = 0; x < vendors.length && !global.requestAnimationFrame; x++) {
    const item = vendors[x];
    global.requestAnimationFrame = global[item+'RequestAnimationFrame']
    global.cancelAnimationFrame = global[item+'CancelAnimationFrame'] || global[item+'CancelRequestAnimationFrame']
  }
  if(!global.myRequestAnimationFrame) {
    global.myRequestAnimationFrame = function(callback) {
      var curTime = new Date().getTime()
      var timeToCall = Math.max(0, 1000/60 - (curTime - lastTime)) // 超过一帧的时间直接执行
      var id = setTimeout(() => {
        callback(curTime + timeToCall)
      }, timeToCall);
      lastTime = curTime + timeToCall
      return id
    }
  }
  if(!global.myCancelAnimationFrame) {
    global.myCancelAnimationFrame = function(id) {
      clearTimeout(id)
    }
  }
})()
let count = 0
let id
function test(time) {
  count++
  console.log(count, 'count ===>');
  id = myRequestAnimationFrame(test)
}
test()
setTimeout(() => {
  myCancelAnimationFrame(id)
}, 1000);