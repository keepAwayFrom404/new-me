/**
 * 作用：数据私有，外部只能通过暴露的方法调用
 * 编码：讲数据和行为封装到一个函数内部，通过给window添加属性暴露接口
 * 问题：
 * （1）依赖多个模块请求过多
 * （2）依赖模糊，不知道具体的依赖关系，导致加载顺序错误
 * （3）由以上两点导致的难以维护
 */
(function(window, $) {
  let data = 'www.baidu.com'
  function foo() {
    console.log(`foo(): ${data}`);
    $('body').css('background', 'red')
  }
  function bar() {
    console.log(`bar(): ${data}`);
    otherFun()
  }
  function otherFun() {
    console.log('i am other fun');
  }
  window.myModules = {
    bar,
    foo,
  }
})(window, jQuery)