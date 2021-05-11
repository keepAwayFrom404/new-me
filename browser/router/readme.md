# 路由实现方式
## hash：h5之前主要使用的模式，主要原理是#后面的字符串是一个hash变化之后不会发起请求，监听hashchange事件可以进行操作

## hsistory: h5之前history只能用于页面间跳转比如go，back，forward，主要实现不刷新跳转靠的是pushstate和replaceState；但是history不会触发任何事件，所以需要罗列出所有history改变的情况，将这些方式一一拦截，达到监听变化的目的

### 主要api
（1）pushstate(state（任意合法对象，可以用在 popstate 事件中）,title（大多数浏览器忽略，可以用null代替）,url（任意有效url用于更新地址栏）)：添加新状态到历史状态栈
（2）replaceState(state,title,url)：用新的状态替换当前状态
（3）popstate：监听前进后退

### history下url变化的四种情况
（1）点击浏览器前进后退
（2）点击a标签
（3）js触发history.pushState 
（4）js触发history.replaceState 

### 注意点
（1）虽然history不会刷新，但是在直接使用url进入或者刷新的时候，服务端是无法识别这个url的，需要在服务端配置，如果匹配不到任何静态资源需要返回单页应用的html

## hash和history的抉择
（1）hash兼容到ie8
（2）不需要服务端配合
（3）看起来丑
（4）会导致锚点功能失效
（5）相同hash值不会触发动作将记录加入到历史栈，但是popstate可以