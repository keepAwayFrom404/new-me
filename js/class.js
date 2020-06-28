// class C {
//   constructor() {
//     this.num = Math.random()
//   }
//   rand() {
//     console.log(`Random: ${this.num}`);
//   }
// }

// const c1 = new C()
// c1.rand()
// C.prototype.rand = function() {
//   console.log(`Random: ${Math.round(this.num * 1000)}`);
// }
// const c2 = new C()
// c2.rand()
// c1.rand()

class P {
  foo() {
    console.log('P.foo');
  }
}

class C extends P {
  foo() {
    super.foo()
  }
}
const c1  = new C()
c1.foo()

const D = {
  foo: function() {
    console.log('D');
  }
}
const E = {
  foo: C.prototype.foo
}

Object.setPrototypeOf(E, D)
E.foo()