define(function(require, exports, module) {
  const module2 = require('./module2')
  function show() {
    console.log(`module4 show() ${module2.msg}`);
  }
  exports.show = show
  require.async('./module3', function(m3) {
    console.log(`异步引入模块3 ${m3.data}`);
  })
})