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