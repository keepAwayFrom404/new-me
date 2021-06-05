# animation：
## 简介：
配合@keyframes进行动画效果
## 基本属性：
（1）animation-name: 动画名
（2）animation-duration：动画耗时
（3）animation-fill-mode：动画最终状态
（4）animation-delay：动画延迟时间
（5）animation-iteration-count：动画执行的次数，infinite无限循环
（6）animation-direction：动画的循环方向（利于处理回去的情况，一般到了最后会瞬间变为初始状态，该属性能让效果更平滑）
## 特点：
（1）多个动画之间属性重叠会以后面为准，后面执行完再移交给前面的处理。
（2）可以使用逗号写多个帧相同的属性
（3）没有中间值的属性不会产生动画，比如宽度auto到300、solid到dotted
