/**
 * CommonJS
 * 概述：每个文件就是一个模块，有自己的作用域，在文件中定义的变量都是私有的，服务端模块加载是运行是同步加载；浏览器端需要提前打包编译处理
 * 特点：
 * （1）所有代码运行在模块作用域，不污染全局
 * （2）多次加载只会在第一次运行，然后被缓存
 * （3）模块加载的顺序按照其在代码中执行的顺序
 * Q：commonjs暴露的模块到底是什么？
 * A：每个模块内部module代表当前变量，是一个对象；它的exports属性是一个接口，加载模块其实是加载module.exports属性
 * require：require用于加载文件，基本功能是读入并执行一个js文件，然后返回该模块的exports对象，没有发现指定模块则报错
 * 加载机制：：输入的是对输出值的一个拷贝，一旦输出一个值模块内部的变化就影响不到这个值
 */
let x = 5
let addX = function(value) {
  return x + value
}

module.exports.x = x
module.exports.addX = addX

let counter = 3
function incCounter() {
  counter++
}

function showCounter() {
  console.log(counter);
}

module.exports = {
  counter,
  incCounter,
  showCounter,
}