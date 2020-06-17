// 原型风格
function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function() {
  return `i am ${this.me}`
}

function Bar(who) {
  Foo.call(this, who)
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function() {
  console.log(`hello ${this.identify()}.`);
}

// const b1 = new Bar('b1')
// const b2 = new Bar('b2')

// b2.speak()

// 对象风格
Foo = {
  init: function(who) {
    this.me = who
  },
  identify: function() {
    return `i am ${this.me}`
  }
}

Bar = Object.create(Foo)

Bar.speak = function() {
  console.log(`hello ${this.identify()}.`);
}

const b1 = Object.create(Bar)
b1.init('b1')
const b2 = Object.create(Bar)
b2.init('b2')
b1.speak()
b2.speak()