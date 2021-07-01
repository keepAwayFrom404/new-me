# sentry 错误监控
## 错误监控方式
（1）try/catch：只能捕获同步错误
（2）window.onerror：同步方法、异步方法报错
（3）error事件：同步方法、异步方法、资源加载
（4）unhandledrejection事件：未捕获的promise事件
（5）vue中使用handleError钩子（刷新的时候会存在未捕获到的问题）
（6）react中使用错误捕获组件包裹App
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
## 异常上报
（1）动态创建img标签，将错误日志放query，不会刷新页面，无需加载任何三方库（现在普遍使用的方式）
（2）ajax上报，就是简单调用接口
## 上报哪些数据
（1）错误堆栈
（2）将异常数据从错误对象中结构出来存入json对象，将json转为字符串，再base64
（3）将错误计入日志
## 工程化代码错误监测：sourcemap