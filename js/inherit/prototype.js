/**
 * 原型继承
 * 缺点：
 * （1）需要抛弃默认创建的Bar.prototype对象并新建（es6之后可以使用Obejct.setPrototypeOf()设置原型关联）
 * （2）无论上面哪种方式都会丢失constructor属性
 */
function Foo(name) {
  this.name = name
}
Foo.prototype.myName = function() {
  console.log(this.name)
}

function Bar(name, age) {
  Foo.call(this, name)
  this.age = age
}

// Bar.prototype = Object.create(Foo.prototype)
Object.setPrototypeOf(Bar.prototype, Foo.prototype)
Bar.prototype.myAge = function() {
  console.log(this.age)
}
Object.defineProperty(Bar,'constructor', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: Bar
})
const bar = new Bar('li', 25)
bar.myName()
bar.myAge()
console.log(Bar.constructor === Bar)