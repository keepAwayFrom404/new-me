export {}

class Person {
  public name: string
  private age: number
  protected readonly gender: boolean
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }
  sayHi(msg: string): void {
    console.log(`i am ${this.name} ${msg}`)
    console.log(this.age)
  } 
}

const tom = new Person('tom', 18)

console.log(tom.name)