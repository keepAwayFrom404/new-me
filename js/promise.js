// function multiply(input) {
//   return new Promise(function(resolve, reject) {
//     console.log(`calculating ${input} x ${input} ...`);
//     setTimeout(resolve, 500, input * input);
//   })
// }

// function add(input) {
//   return new Promise(function(resolve, reject) {
//     console.log(`calculating ${input} + ${input} ...`);
//     setTimeout(resolve, 500, input + input);
//   })
// }

// const p = new Promise(function(resolve, reject) {
//   console.log('start new Promise');
//   resolve(123)
// })

// // p.then(multiply).then(add).then(multiply).then(add).then(result => {
// //   console.log(`Got value: ${result}`);
// // }).catch(err => {
// //   console.log(err);
// // })

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, 'P1');
// });
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, 'P2');
// });
// // 同时执行p1和p2，并在它们都完成后执行then:
// Promise.all([p1, p2]).then(function (results) {
//   console.log(results); // 获得一个Array: ['P1', 'P2']
// });

// Promise.race([p1, p2]).then(function (result) {
//   console.log(result); // 'P1'
// });

// const promise = new Promise((res, rej) => {
//   console.log('promise create');
//   res('hahaha resolve')
// })
// promise.then(res => {
//   promise.then(res=> {
//     console.log('C');
//   })
//   console.log('A');
// })

// promise.then(res => {
//   console.log('B');
// }).then(res => {
//   console.log(res,123);
//   console.log('D');
// })

// console.log(promise.then());

/**
 * 解决回调调用过晚的问题，当promsie用一个非立即值决议时，规定的行为是把决议值展开到promise（这里是异步的展开）所以p1的回调排在p2之后，输出A->B
 */
// const p3 = new Promise(res => res('B'))
// const p1 = new Promise(res => res(p3))
// const p2 = new Promise(res => res('A'))
// p1.then(v => {
//   console.log(v);
// })
// p2.then(v => {
//   console.log(v);
// })

/**
 * 回调未调用的问题：可以永promise的竞态进行处理
 */
// function timeoutPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej('Timeout!')
//     }, delay);
//   })
// }

// function foo() {
//   return new Promise(res => {
//     setTimeout(() => {
//       res('foo done')
//     }, 4000);
//   })
// }

// Promise.race([foo(),timeoutPromise(3000)]).then(res => {
//   console.log(res,'res');
// })
// .catch(err => {
//   console.log(err,'err');
// })

/**
 * （1）向Promise.resolve() 传递一个非Promise、非thenable的立即值，就会得到用这个值填充的Promise
 * （2）如果传递一个Promise就只会返回同一个Promise
 * （3）传递一个thanable值，Promise.resolve会试图展开这个值，而且展开的过程会持续到提取出一个具体的非类Promise的最终值
 * （4）通过Promise.resolve过滤来获得可信任的值完全没有坏处，它为所有函数的返回值都封装了一层，能够保证总会返回一个Promise结果
 */
// （1）p1与p2的行为一致
// const p1 = new Promise(res => res(42))
// const p2 = Promise.resolve(42)
// // （2）传递一个Promise返回同一个Promise
// const p3 = Promise.resolve(42)
// const p4 = Promise.resolve(p3)
// console.log(p3 === p4);
// // （3）传递thanable值
// const p5 = {
//   then: function(cb, errcb) {
//     cb(42)
//     new Error('p5 err')
//     errcb('evil laugh')
//   }
// }
// p5.then(val => {
//   console.log(val);
// },err => {
//   console.log(err);
// })
// Promise.resolve(p5).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

/**
 * Promise的参数使用resolve和reject因为第一个参数内容可能是成功或者失败
 */
// const p6 = Promise.resolve(21)
// p6.then(v => {
//   console.log(v);
//   return new Promise(res => {
//     setTimeout(() => {
//       res(v * 2)
//     }, 1000);
//   })
// }).then(v => {
//   console.log(v);
// })

function delay(time) {
  return new Promise(res => setTimeout(res, time))
}

delay(100).then(function STEP2() {
  console.log('Step 2 (after 100ms)');
  return delay(200)
}).then(function STEP3() {
  console.log('Step 3(after another 200ms)');
}).then(function STEP4() {
  console.log('step 4 (next job)');
  return delay(50)
}).then(function STEP5() {
  console.log('step 5 (after anther 50ms)');
})

const rejectPr = new Promise((resolve, reject) => {
  resolve(Promise.reject('Opps'))
})
rejectPr.then(function fulfilled() {
  // 永远不会到达这里
}, function reject(err) {
  console.log(err);
})