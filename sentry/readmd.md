# sentry 错误监控
## 错误监控方式
（1）try/catch：只能捕获同步错误
（2）window.onerror：同步方法、异步方法报错
（3）error事件：同步方法、异步方法、资源加载
（4）unhandledrejection事件：未捕获的promise事件
## 最终解决方案
```
window.addEventListener('unhandledrejection', function(err) {
  throw e.reson
})

window.addEventListener('error', function(e) {
  console.log('error event:', e)
  return true // 这样就不会把错误抛出来了（感觉没必要）
}, true) // 为了解决error事件阻止冒泡的问题吗
```