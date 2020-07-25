const example = require('./common_js')
let counter = require('./common_js').counter
const incCounter = require('./common_js').incCounter
console.log(counter);
console.log(example.showCounter());
counter++
incCounter()
console.log(counter);
console.log(example.showCounter());