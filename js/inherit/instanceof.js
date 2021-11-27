/**
 * instanceof: 在对象的整条[[prototype]]链中是否有指向函数的prototype的对象
 * 问题：不能处理两个对象是否使用[[prototype]]连接（可以使用a.isPrototypeOf(b)判断）
 * 可以使用Object.getPrototypeOf()获取对象的[[prototype]]或者使用非标准的__proto__
 */
function Foo(){}
var a = new Foo
console.log(Foo instanceof Function)
const b = 'i am global a'
const obj = {b:'i am obj a'}
function Test() {
  console.log(this.b)
}
const c = new Test()
const newTest = Test.bind(obj)
console.log(c instanceof newTest)

// __proto__实现
Object.defineProperty(Object.prototype, '__proto__', {
  get: function() {
    return Object.getPrototypeOf(this)
  },
  set: function(o) {
    Object.setPrototypeOf(this, o)
    return o
  }
})