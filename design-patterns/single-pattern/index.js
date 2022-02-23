/**
 * 标准的单例模式只是用变量标志实例是否被创建
 * 问题：类不透明，使用者必须知道这是一个单例类且只能通过Singleton.getInstace获取对象实例
 */
const Singleton = function(name) {
  this.name = name
}

Singleton.prototype.getName = function() {
  console.log(this.name);
}

Singleton.getInstance = (function() {
  var instance = null
  return function(name) {
    if(!instance) instance = new Singleton(name)
    return instance
  }
})()

const a = Singleton.getInstance('li1')
const b = Singleton.getInstance('li2')

console.log(a === b);


