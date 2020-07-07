function multiply(input) {
  return new Promise(function(resolve, reject) {
    console.log(`calculating ${input} x ${input} ...`);
    setTimeout(resolve, 500, input * input);
  })
}

function add(input) {
  return new Promise(function(resolve, reject) {
    console.log(`calculating ${input} + ${input} ...`);
    setTimeout(resolve, 500, input + input);
  })
}

const p = new Promise(function(resolve, reject) {
  console.log('start new Promise');
  resolve(123)
})

// p.then(multiply).then(add).then(multiply).then(add).then(result => {
//   console.log(`Got value: ${result}`);
// }).catch(err => {
//   console.log(err);
// })

const p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P1');
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
  console.log(results); // 获得一个Array: ['P1', 'P2']
});

Promise.race([p1, p2]).then(function (result) {
  console.log(result); // 'P1'
});