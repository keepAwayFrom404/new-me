// 与接口不同的区别在于可以包含具体的实现，abstract之后就只能被继承不能被new
export {}

abstract class Animal {
  eat(food: string): void {
    console.log(`呼哧呼哧的吃${food}`)
  }
  abstract run(distance: number): void
}

class Dog extends Animal {
  run(distance: number) {
    console.log(`爬行${distance}`)
  }
}

const d = new Dog()
d.eat('骨头')
d.run(100)