# 一些重要知识点
## 元素
（1）替换元素的尺寸由内部元素决定，无论设置成block还是inline，比如设置成block宽度也不会自动撑满（img、video、input、textarea、object）
（2）
## 定位
（1）绝对定位元素的高度100%是根据padding-box计算的，默认相对于content-box计算
## 属性
（1）max-width/height默认值为none，如果为auto，width就无法设置成比auto值更大了（auto继承父类且设置了400px话，子元素的宽度就只能设置小于等于400，因为max-width会覆盖width且优先级高于！important）；min-width/height默认值为auto，min-width会覆盖max-width
（2）padding属性不支持负值，且水平垂直百分比都相对宽度计算
（3）offsetwidth是border-box的尺寸；clientwidth包括padding不包含border
（4）margin的垂直水平百分比值也是根据宽度计算的
（5）padding、margin的百分比都相对于父元素计算
（6）margin：auto计算的前提条件是width或height为auto时，元素具有对应方向的自动填充特性
## 替换元素
（1）内容的外观不受页面css的影响，除非浏览器暴露一些样式接口
（2）有自己的尺寸，video、iframe默认300*150；图片默认为0；输入文本不同浏览器不一样
（3）在很多css属性上有自己的一套表现规则，比如vertical-align：baseline；x的下边缘，而替换元素的基线被定义为元素的下边缘

## 特殊表现
（1）内联元素的padding在垂直方向上会发生层叠，可用于增大点击区域且不影响布局

## 专题
（1）margin重叠：
  a. 发生场景：margin重叠只发生在块级元素（浮动与定位不算）与文档流向垂直的位置；发生在相邻兄弟之间、父级与第一个或最后一个元素之间、空块级元素margin合并
  b. 处理方式：父子之间：bfc、父元素设置border或者padding、父元素第一个与最后一个子元素使用内联元素分隔，对于底部设置父元素高度；空块级合并：设置border、padding、添加内联元素、设置height
  c. 合并规则：正正取大，正负相加，负负最负
  d. 合并的意义：兄弟之间，不会出现margin1:2的情况，排版更自然；父子之间，在页面任意地方放入裸div都不会影响块状布局；自身margin合并，可以避免不小心遗落或生成的空标签影响排版和布局
  e. margin无效的场景：inline元素的垂直margin，替换元素margin不会合并; 绝对定位元素非定位方向的margin无效; 定高容器子元素的margin-bottom和定宽容器的margin-right无效，原因与定位元素相似，只能影响兄弟或者父级的位置；