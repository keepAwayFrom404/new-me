// 确保了method方法只能在Foo实例上调用，foos对实例的引用不会计入内存回收机制，所以删除实例时不用考虑foos，也不会内存泄露
const foos = new WeakMap()

class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if(!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}