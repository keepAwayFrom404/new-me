// function mixin(source, target) {
//   for(let key in source) {
//     if(!(key in target)) {
//       target[key] = source[key]
//     }
//   }
//   return target
// }

// const Vehicle = {
//   engines: 1,
//   ignition: function() {
//     console.log('Turning on your engine');
//   },
//   drive: function() {
//     this.ignition()
//     console.log('Steering and moving forword');
//   }
// }
// const Car = mixin(Vehicle, {
//   wheels: 4,
//   drive: function() {
//     Vehicle.drive.call(this)
//     console.log('Rolling on all ' + this.wheels+' wheel');
//   }
// })

// function Vehicle() {
//   this.engines = 1
// }
// Vehicle.prototype.ignition = function() {
//   console.log('Turning on your engine');
// }
// Vehicle.prototype.drive = function() {
//   this.ignition()
//   console.log('Steering and moving forword');
// }

// function Car() {
//   var car = new Vehicle()
//   car.wheels = 4
//   const vehDrive = car.drive
//   car.drive = function() {
//     vehDrive.call(this)
//     console.log('Rolling on all ' + this.wheels+' wheel');
//   }
//   return car
// }
// const myCar = new Car()
// myCar.drive()

const something = {
  cool: function() {
    this.greeting = 'hello world'
    this.count = this.count?this.count+1:1
  }
}


const another = {
  cool: function() {
    something.cool.call(this)
  }
}
another.cool()
