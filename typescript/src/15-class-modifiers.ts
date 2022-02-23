// private：只能在类中访问；public：默认值，共有的；protected: 受保护的，只能在类及子类中访问
export {}

class Person {
  public name: string
  private age: number
  protected gender: boolean
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }
  sayHi(msg: string): void {
    console.log(`i am ${this.name} ${msg}`)
    console.log(this.age)
    console.log(this.gender)
  } 
}

const tom = new Person('tom', 18)

console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

class Student extends Person {
  private constructor(name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }
  static create(name: string, age: number) {
    return new Student(name, age)
  }
}

const stu = Student.create('lee', 18)

console.log(stu.name)