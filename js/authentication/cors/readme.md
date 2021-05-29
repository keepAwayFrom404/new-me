# 从同源策略说起
## 同源策略
### 简介：两个url的协议、域名、端口号都相同才是同源，是一个重要的安全策略，防止恶意的
### 限制：
（1）非同源cookie、localstorage、indexdb无法读取；
（2）dom无法获得
（3）ajax请求无法发送
### 解决方案：
1. 浏览器页面之间
（1）片段识别符（hash）：#之后的部分，可以修改片段识别符将信息带给ifrme，监听hashchange事件
（2）window.name：非同源窗口写入window.name，就可以读取；容量大，但是必须监听子窗口window.name的变化，影响网页性能
（3）postMessage: h5给出的解决方案，可以跨页面通信；可以配合localstorage使用
2. 浏览器与服务器之间
（1）jsonp：兼容性好，通过script标签请求数据，服务器收到请求后将数据放在一个指定的回调函数当中；只能处理get请求
（2）webscoket：ws协议，请求时会带上origin信息，服务端可以通过该信息配置白名单
（3）cors：w3c标准给出的跨域解决方案，可以发送任何请求；需要浏览器和服务器同时支持，ie10+；通过响应头的access-control-allow-origin（允许的源）、-allow-credentials（是否允许发送cookie，发送cookie就不能设置源为*，cookie需要同源）、expose-headers（指定浏览器可以拿到哪些头部字段，除了六个基本的）；对于复杂请求（put、delete、content-type为json）等会先发送一个options的预检请求，成功之后就不需要预检请求了，直接带上origin请求
（4）三方框架集成的proxy：基本都是使用的http-proxy-middleware，起一个与当前客户端同源的正向代理服务去请求接口；
（5）使用nginx反向代理：正向代理隐藏客户端，反向代理隐藏服务器
（6）浏览器直接禁用跨域检查