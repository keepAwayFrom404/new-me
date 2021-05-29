# cookie
## 简介：因为http的链接是无状态的，cookie是为了维持状态而产生的
## 基本概念：
（1）cookie的值会忽略分号、逗号和空格，所以最好url加密后存储
（2）domain：绑定的域名，默认当前域，可以设置二级域名；
（3）path：路由匹配，匹配到的才绑定cookie
（4）expires或者max-age可以设置过期时间
（5）secure：用来设置cookie只在安全协议下传输，比如https、wss
（6）httponly：设置不允许js操作cookie
## 特点：
（1）一般存储在客户端，用于保存维持用户状态的登录信息
（2）大小限制比较严格，一般4k左右
（3）cookie同源不区分协议和端口
## 存在问题：
（1）cookie可以修改，所以单纯利用cookie（不使用session）存储用户信息是不安全的，有规律可循
（2）未设置httponly在xss下很容易被获取盗用
（3）https下未开启secure依然可能被黑客通过http网页进行xss获取；即使设设置了也有cookie的写权限，被xss注入之后覆盖成攻击者的cookie，从而盗用信息
## 防护
（1）不在cookie存储过于敏感的信息，value不使用明文而是session
（2）增加登陆随机码，每次访问增加一个随机数cookie
（3）使用https
（4）重要值httponly