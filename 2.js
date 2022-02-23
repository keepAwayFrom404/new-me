const p = Promise.resolve().then(() => {
  console.log('then1');
  console.log(foo());
  return foo()
}).then(() => {
  console.log('then2');
})
p.then(() => {
  console.log('then3');
})

function foo() {
  // setTimeout(() => {
    return Promise.resolve().then(() => {
      return 123
      console.log('foo');
    })
  // }, 2000);
  console.log('outer side');
}