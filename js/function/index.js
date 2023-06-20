(function () {
  console.log(this)
})()

function foo() {
  'use strict'
  console.log(this)
}
foo()

function bar() {
  return this
}

console.log(bar.constructor)