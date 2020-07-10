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

// const s = new Date().getSeconds()
// console.log(s);
// setTimeout(function() {
//   // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);
// while(true) {
//   if(new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }

console.log("script start");
new Promise((res, rej) => {
  console.log("promise1");
  res();
}).then(() => {
  console.log("promise1 then");
});

setTimeout(() => {
  console.log("settimeout 1");
  new Promise((res, rej) => {
    console.log("promise2");
    res();
  })
    .then(() => {
      console.log("promise2 then");
    })
    .then(() => {
      console.log("promise2 then2");
    });
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
}, 0);
console.log("script end");

// node
// setImmediate(() => console.log('immediate1'));
// setImmediate(() => {
//     console.log('immediate2')
//     Promise.resolve().then(() => console.log('promise resolve'))
// });
// Promise.resolve().then(() => {
//   console.log('promise first');
// })
// setImmediate(() => console.log('immediate3'));
// setImmediate(() => console.log('immediate4'));
