# 一些重要知识点
## 元素
（1）替换元素的尺寸由内部元素决定，无论设置成block还是inline，比如设置成block宽度也不会自动撑满（img、video、input、textarea、object）
（2）
## 定位
（1）绝对定位元素的高度100%是根据padding-box计算的，默认相对于content-box计算
## 属性
（1）max-width/height默认值为none，如果为auto，width就无法设置成比auto值更大了（auto继承父类且设置了400px话，子元素的宽度就只能设置小于等于400，因为max-width会覆盖width且优先级高于！important）；min-width/height默认值为auto，min-width会覆盖max-width

## 替换元素
（1）内容的外观不受页面css的影响，除非浏览器暴露一些样式接口
（2）有自己的尺寸，video、iframe默认300*150；图片默认为0；输入文本不同浏览器不一样
（3）在很多css属性上有自己的一套表现规则，比如vertical-align：baseline；x的下边缘，而替换元素的基线被定义为元素的下边缘

## 特殊表现
（1）内联元素的padding在垂直方向上会发生层叠，可用于增大点击区域且不影响布局