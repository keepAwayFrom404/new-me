# 单例模式
## 单例模式的作用
（1）减少重复创建成本，
（2）惰性单例，在合适的时候创建唯一对象
## 如何避免全局变量污染  
（1）使用命名空间
```js
const MyApp = {}
MyApp.namespace = function(name) {
  const parts = name.split('.')
  let cur = MyApp
  for(let key in parts) {
    if(!cur[parts[key]]) cur[parts[key]] = {}
    cur = cur[parts[key]]
  }
}
MyApp.namespace('event')
MyApp.namespace('dom.style')
// 等价于
const MyApp = {
  event: {},
  dom: {
    style: {}
  }
}
```  
（2）使用闭包，将变量封装在闭包内部
```js
const user = (function() {
  const __name = 'lijiahua'
  const __age = 25
  return {
    getUserInfo() {
      return __name + ' ' + __age
    }
  }
})()
```