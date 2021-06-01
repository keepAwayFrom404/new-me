# Class
## 概念：
es6创建构造函数的新方法，一个原型继承的语法糖
## 特点：
（1）子类必须在constructor中调用super才能访问this，默认会自动加上constructor和super调用；
（2）使用static声明的父类静态方法也会被子类继承；
（3）可以使用Object.getPrototypeOf判断一个类是否继承另一个类；