/**
 * AMD
 * 特点：允许指定回调函数，主要在浏览器使用
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