// FE
// async function foo() {
//   await bar()
//   console.log('async 2');
// }

// async function bar() {
//   console.log('async 1');
// }

// foo()

// setTimeout(() => {
//   console.log('settimeout');
// }, 0);

// new Promise(res => {
//   console.log('promise');
//   res()
// }).then(res => {
//   console.log('promise1');
// }).then(res => {
//   console.log('promise2');
// })

// node
setImmediate(() => console.log('immediate1'));
setImmediate(() => {
    console.log('immediate2')
    Promise.resolve().then(() => console.log('promise resolve'))
});
Promise.resolve().then(() => {
  console.log('promise first');
})
setImmediate(() => console.log('immediate3'));
setImmediate(() => console.log('immediate4'));
