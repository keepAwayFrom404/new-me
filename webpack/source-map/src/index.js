import './index.css'
const myConsole = require('./console')
function add(a, b) {
  return a+b
}

myConsole(add(1,1))