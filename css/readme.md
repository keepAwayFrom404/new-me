# 一些重要知识点
## 元素
（1）替换元素的尺寸由内部元素决定，无论设置成block还是inline，比如设置成block宽度也不会自动撑满（img、video、input、textarea、object）
（2）
## 定位
（1）绝对定位元素的高度100%是根据padding-box计算的，默认相对于content-box计算
## 属性
（1）max-width/height默认值为none，如果为auto，width就无法设置成比auto值更大了（auto继承父类且设置了400px话，子元素的宽度就只能设置小于等于400，因为max-width会覆盖width且优先级高于！important）；min-width/height默认值为auto，min-width会覆盖max-width