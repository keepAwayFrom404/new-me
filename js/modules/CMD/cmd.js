/**
 * CMD
 * 简介：cmd主要用于浏览器，模块加载是异步的，只有使用才加载，它整合了commonjs与amd的特点，代表是sea.js
 */
define(function(require) {
  const m1 = require('./module1')
  const m4 = require('./module4')
  m1.showMsg()
  m4.show()
})