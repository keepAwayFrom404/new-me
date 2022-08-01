# cadenli-node-tools

## 安装
```js
npm install cadenli-node-tools
```

## 导入
```js
const cadenliTool = require('cadenli-node-tools')
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr = cadenliTool.dateFormate(new Date())
// 输出：2022-07-29 20:00:00
console.log(dtStr)
```

## 转译html中的特殊字符
```js
// 待转换的html字符串
const htmlStr = '<h1 title="abc"><span>hahah&nbsp;</span></h1>'
// 调用htmlEscape进行转换
const str = htmlEscape(htmlStr)
// 转换的结果: &lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;hahah&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原html中的特殊字符
```js
// 待还原的html字符串
const unStr = htmlUnEscape(str)
// 还原后的结果：<h1 title="abc"><span>hahah&nbsp;</span></h1>
console.log(unStr)
```

## 开源协议
ISC