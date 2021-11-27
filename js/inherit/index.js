// 寄生继承
function Vehicel () {
  this.engines = 1
}
Vehicel.prototype.ignition = function() {
  console.log('turningon my engines')
}
Vehicel.prototype.drive = function() {
  this.ignition()
  console.log('steering and moving forward!')
}

function Car() {
  const car = new Vehicel()
  car.wheels = 4
  const vehicelDrive = car.drive

  car.drive = function() {
    vehicelDrive.call(this)
    console.log('roll on all '+this.wheels+' wheels')
  }
  return car
}

const car = new Car()
car.drive()

// 隐式混入
const Something = {
  cool: function() {
    this.greet = 'hello great'
    this.count = this.count ? this.count+1:1
  }
}

Something.cool()
console.log(Something.greet)
console.log(Something.count)

const Otherthing = {
  cool: function() {
    // 隐式把something混入
    Something.cool.call(this)
  }
}
Otherthing.cool()
console.log(Otherthing.greet)
console.log(Otherthing.count)
