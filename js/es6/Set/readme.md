# Set
## 简介：是es6新增的数据结构，表示没有相同项的类数组（可用于去重）
## 属性
（1）constructor：Set
（2）size：成员总数
## 方法
（1）add：添加值，返回Set本身
（2）delete：删除值，返回boolean
（3）has：返回boolean
（4）clear：清除所有，无返回值
（5）keys：返回键名遍历器
（6）values：返回键值遍历器
（7）entries：返回键值对遍历器
（8）forEach：遍历每个成员
## 应用
（1）数组去重
（2）简单实现并集、交集和差集
## 补充点
（1）Array.from可以讲Set转为数组
（2）Set没有键名所以keys和values行为一致
（3）Set实例默认可遍历，使用的是values