/**
 * 实现一个透明单例类，用户可以像使用其他普通类一样使用这个类创建对象
 * 缺点：
 * （1）使用了自执行函数和闭包，增加了程序的复杂度
 * （2）CreateDiv构造函数做了两件事：第一创建对象和执行初始化；第二保证只有一个对象，不符合单一职责原则，如果后面需要将这个单例变成普通类，必须将控制创建唯一对象的逻辑去掉。
 */

const CreateDiv = (function() {
  let instance
  const CreateDiv = function(html) {
    if(!instance) {
      this.html = html
      this.init()
      instance = this
    }
    return instance
  }
  CreateDiv.prototype.init = function() {
    const div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
  return CreateDiv
})()