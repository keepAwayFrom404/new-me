# 单点登录
## 简介：
多个跨域域名之下实现单点登录，一个地方登陆，多个地方可直接上线，通常由独立的sso系统记录登录状态，下发ticket，各业务系统配合存储和认证ticket
## 实现：
（1）sso系统不是通过接口直接返回ticket（token）而是通过带code的url重定向到系统a的接口上，这个接口通常是a向sso注册时约定
（2）浏览器重定向到a下，带着code访问了a的callback接口，callback接口通过code换取ticket