# WeakMap
## 简介：是es6新增的数据结构，类似Map，但是只接受对象作为键名（null除外）
## 属性
（1）constructor：WeakMap
## 方法
（1）get：取值，返回value或者undefined
（2）set：添加值，返回WeakMap本身
（3）delete：删除值，返回boolean
（4）has：返回boolean
## 应用
（1）给dom节点添加信息，而不用担心这些节点从文档中移除时会发生内存泄露
（2）部署私有属性：
## 补充点
（1）由于垃圾回收前后成员个数不一样，且垃圾回收机制的不确定，所以WeakSet不可遍历
（2）弱引用只是键名，键值依旧正常引用