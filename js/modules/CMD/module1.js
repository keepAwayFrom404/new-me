define(function(require, exports, module) {
  let data = 'i am module1'
  function showMsg() {
    console.log(`showMsg() ${data}`);
  }
  exports.showMsg = showMsg
})