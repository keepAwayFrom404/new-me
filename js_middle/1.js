let a = 1
let b = 2
function foo() {
  a++
  b = b * 3
  a = b + 3
  console.log('foo ===>'+a,b);
}

function bar() {
  b--
  a = 8 + b
  b = a * 2
  console.log('bar ===>'+a, b);
}

setTimeout(() => {
  foo()
}, Math.random()*1000);

setTimeout(() => {
  bar()
}, Math.random()*1000);