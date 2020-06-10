function mixin(source, target) {
  for(let key in source) {
    if(!(key in target)) {
      target[key] = source[key]
    }
  }
  return target
}

const Vehicle = {
  engines: 1,
  ignition: function() {
    console.log('Turning on your engine');
  },
  drive: function() {
    this.ignition()
    console.log('Steering and moving forword');
  }
}
const Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this)
    console.log('Rolling on all ' + this.wheels+' wheel');
  }
})
Car.drive()