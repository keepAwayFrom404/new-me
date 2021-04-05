/**
 * CMD
 * 简介：cmd主要用于浏览器，模块加载是异步的，只有使用才加载，它整合了commonjs与amd的特点，代表是sea.js，define入参与amd相同，但是提倡使用factory一个参数，在入参执行时填入三个参数
 * 特点：
 * （1）对于依赖的模块，amd是提前执行，cmd是延迟执行（requirejs2.0也改成延迟执行了
 * （2）amd推崇依赖前置，cmd依赖就近
 */
define(function(require) {
  const m1 = require('./module1')
  const m4 = require('./module4')
  m1.showMsg()
  m4.show()
})