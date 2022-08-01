## express.static
按照前后顺序查找资源

## 路由
1. 按照先后顺序匹配
2. 只有方法与路径全匹配才会命中handle

## app.use
注册全局中间件

## 中间件
1. next：处理关系扭转
2. 作用
- 共享req和res给全局添加属性和方法供下游中间件或路由使用
3. 使用app.use注册的是全局中间件，可以在指定路由添加局部生效的中间件（可使用逗号或者数组传递多个）
4. 注意事项
- 在路由前注册
5. 分类
- 应用级别：绑定到app实例上的中间件
- 错误级别：专门用来捕获项目中发生的异常错误，只有定义在所有路由之后
- 路由级别：绑定到express.Router()实例上的中间件
- express内置：static、json（解析json格式的表单数据）、urlencoded（解析url-encoded请求体格式）
- 第三方：三方中间件
## req.body
获取json格式和url-encode格式数据

## 跨域
1. Access-Control-Allow-Origin：允许访问的域名地址
2. Access-Control-Allow-Header：允许访问的请求头，默认九个内为简单请求，如果发送额外的请求头需要服务端配置
3. Access-Control-Allow-Methods：默认仅支持get、post、head为简单请求，不在2、3内或者请求类型为application/json为预检请求（会先发起预检请求成功后才发起真正的请求）
4. josnp接口需要在cors之前不然也是一个cors的请求