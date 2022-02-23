function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

const p = new Point(1, 2)

class Point2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}

// console.log(Object.keys(Point.prototype));
// console.log(Object.keys(Point2.prototype));

class Foo {
  constructor() {
    return Object.create(null)
  }
}
// console.log(new Foo() instanceof Foo);
const p2 = new Point(2, 3)
// console.log(p2.__proto__ === p.__proto__); // true

class MyClass {
  get prop() {
    return 'getter'
  }
  set prop(value) {
    console.log('setter: ' + value);
  }
}

const inst = new MyClass()
// console.log(inst.prop = '111');

const descriptor = Object.getOwnPropertyDescriptor(MyClass.prototype, 'prop')
// console.log(descriptor);
const methodName = 'getArea'
class Square {
  [methodName]() {
    console.log('get area done');
  }
}
const square = new Square()
// square.getArea()

const person = new class {
  constructor(name) {
    this.name = name
  }
  
  sayName() {
    console.log(this.name);
  }
}('张三')
// person.sayName()

class Foo2 {
  constructor(...args) {
    this.args = args
  }
  * [Symbol.iterator]() {
    for(let arg of this.args) {
      yield arg
    }
  }
}

for(let x of new Foo2('hello', 'world')) {
  // console.log(x);
}

class Obj {
  constructor() {
    this.getThis = () => this
  }
}

const myObj = new Obj()
// console.log(myObj.getThis() === myObj); // true

function selfish(target) {
  const cache = new WeakMap()
  const handle = {
    get(target, key) {
      const value = Reflect.get(target, key)
      if(typeof value !== 'function') {
        return value
      }
      if(!cache.has(value)) {
        cache.set(value, value.bind(target))
      }
      return cache.get(value)
    }
  }
  const proxy = new Proxy(target, handle)
  return proxy
}

class Logger {
  constructor() {
    // this.printName = this.printName.bind(this)
  }

  printName(name = 'three') {
    this.print(`Hello ${name}`)
    
  }

  print(text) {
    console.log(text);
  }
}

const logger = selfish(new Logger())
const { printName } = logger
// printName()

class Foo3 {
  static classMethod() {
    // this.baz()
    return 'hello'
  }
  static baz() {
    console.log('hello');
    
  }
  baz() {
    console.log('world');
  }
}
const foo3 = new Foo3()
// foo3.baz()

class Bar extends Foo3 {
  static classMethod() {
    console.log(super.classMethod() + ', too');
  }
}

// Bar.classMethod()

class IncreasingCounter {
  _count = 0
  static prop = 1

  get value() {
    console.log('get the current value:' + this._count);
  }
  increment() {
    this._count++
    return this
  }
}

const insCount = new IncreasingCounter()
insCount.increment().increment()
// insCount.value

// IncreasingCounter.prop = 1
// console.log(IncreasingCounter.prop);

// 私有方法
class Widget {
  snaf = '123'
  foo(baz) {
    bar.call(this, baz)
  }
}

function bar(baz) {
  this.snaf = baz
}

const widget = new Widget()
widget.foo(233)
// console.log(widget.snaf);

const bar2 = Symbol('bar')
const snaf = Symbol('snaf')

class MyClass2 {
  foo(baz) {
    this[bar2](baz)
  }
  [bar](baz) {
    this[snaf] = baz
  }
}

class Self {
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }
  // #sum() {
  //   return this.#a + this.#b;
  // }
  printSum() {
    // console.log(this.#sum());
  }
}

const self = new Self()
// self.printSum()
// console.log(self.value);

class Foo4 {
  #privateValue = 42
  static getPribateValue(foo) {
    console.log(foo.#privateValue);
  }
}
// Foo4.getPribateValue(new Foo4())

class FakeMath {
  static PI = 22 / 7
  static #totallyRandomNumber = 4
  static random() {
    console.log('I heard you like random numbers...');
    console.log(FakeMath.#totallyRandomNumber);
  }
}

// console.log(FakeMath.PI);
// FakeMath.random()
// console.log(new.target);

class Shape {
  constructor() {
    if(new.target === Shape) {
      throw new Error('本类不能实例化')
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super()
    this.length = length
    this.width = width
  }
}

// const x = new Shape()
const y = new Rectangle(3, 4)
// console.log(y);

class Parent {
  a = 2
  static prop = 1
  constructor() {
    this.x = 3
    // console.log(super.valueOf(), '=====>')
  }
  print() {
    console.log(this.x)
    
  }
  method() {
    console.log('Parent method');
  }
}

class Child extends Parent {
  constructor() {
    super()
    this.x = 4
    super.x = 5
    // console.log(super.x)
    // console.log(this.x)
  }
  m() {
    super.print()
  }
  cm() {
    super.method()
  }
  static sm() {
    console.log(super.prop)
  }
}

const c = new Child()
const p1 = new Parent()
// c.m()

function pro() {

}
// console.log(pro.__proto__ === Function.prototype)
class A {

}

class B extends A{}
// console.log(B.__proto__ === A)
// console.log(B.prototype.__proto__ === A.prototype)

const a = new A()
const b = new B()

// console.log(a.__proto__ === A.prototype)

function MyArray() {
  Array.apply(this, arguments)
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true,
  }
})

const color = new MyArray()
color[0] = 'red'
// console.log(color.length)
class MyArray2 extends Array {}
const arr = new MyArray2()
arr[0]  = 12
// console.log(arr.length)
arr.length = 0
// console.log(arr.length)

class VersionArray extends Array {
  constructor() {
    super()
    this.history = [[]]
  }
  commit() {
    this.history.push(this.slice())
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1])
  }
}

const versionArray = new VersionArray()
versionArray.push(1)
versionArray.push(2)
// console.log(versionArray)
// console.log(versionArray.history)
versionArray.commit()
// console.log(versionArray)
// console.log(versionArray.history)
versionArray.push(3)
// console.log(versionArray)
// console.log(versionArray.history)
versionArray.revert()
// console.log(versionArray)

class ExtendableError extends Error {
  constructor(message) {
    super()
    this.message = message
    this.stack = (new Error()).stack
    this.name = this.constructor.name
  }
}

class MyError extends ExtendableError {}

const myError = new MyError('123')
// console.log(myError.message)
// console.log(myError instanceof Error)
// console.log(myError.name)
// console.log(myError.stack)

class NewObj extends Object {}

const o = new NewObj({attr: true})
// console.log(o.attr === true)

function mixin(...mixins) {
  class Mix {
    constructor() {
      for(let mixin of mixins) {
        copyProperties(this, new mixin()) // 拷贝实例属性
      }
    }
  }

  for(let mixin of mixins) {
    copyProperties(Mix, mixin) // 静态属性与方法
    copyProperties(Mix.prototype, mixin.prototype) // 原型属性
  }

  return Mix
}

function copyProperties(target, source) {
  for(let key of Reflect.ownKeys(source)) {
    if(key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      const desc = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(target, key, desc)
    }
  }
}