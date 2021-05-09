# WeakSet
## 简介：是es6新增的数据结构，类似Set，但是成员只能是对象，且对象都是弱引用，垃圾回收机制不会考虑WeakSet的引用
## 属性
（1）constructor：WeakSet
## 方法
（1）add：添加值，返回WeakSet本身
（2）delete：删除值，返回boolean
（3）has：返回boolean
## 应用
（1）储存Dom节点，而不用担心这些节点从文档中移除时会发生内存泄露
## 补充点
（1）由于垃圾回收前后成员个数不一样，且垃圾回收机制的不确定，所以WeakSet不可遍历
（2）WeakSet添加数组成员的时候，数组成员只能是对象