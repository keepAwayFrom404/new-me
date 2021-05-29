# tokem
## 简介：与session类似，是加密了的用户标识，不过可以不用存储，传到后端之后通过计算解析
## 特点：
（1）使用计算的时间换取存储session所需的空间
（2）一般只是对用户信息进行普通的base64，然后再配合sign签名进行加密防篡改
## 扩展
（1）refresh token：一种专门生成access token的token，时间可以相对长些，不常校验，一般access token过期之后才会校验
（2）access token：业务接口用来鉴权的token，也就是常说的token，时间一般较短