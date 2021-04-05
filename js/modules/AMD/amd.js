/**
 * AMD
 * 特点：允许指定回调函数，主要在浏览器使用，是一个异步的模块方案，模块引入不影响代码运行，提供回调，所有依赖模块的语句都放在这个回调里面
 * 定义--->define(id,[dependencies],factory) API：
 * （1）id：模块的名称或者模块加载器请求的指定脚本的名称
 * （2）dependencies：定义中模块所依赖模块的数组，默认为 [“require”, “exports”, “module”]数组
 * （3）factory：模块初始化需要执行的函数或对象，如果是函数它应该只被执行一次，如果是对象，该对象是模块的输出值
 * 使用--->require([module], callback)：
 * （1）第一个数组为要加载的模块
 * （2）回调函数
 * 主要的代表是requiredjs；通过define定义模块，通过require引入模块
 * 小结：模块定义的方法清晰，不会污染全局，能清晰的看出模块之间的依赖关系，可用于浏览器，非同步加载，也可根据需要动态加载
 */
(function() {
  require.config({
    baseUrl: './',
    paths: {
      alerter: './alerter',
      dataService: './dataService',
      jquery: './jquery.min'
    }
  })
  require(['alerter'], function(alerter) {
    alerter.showMsg()
  })
})()