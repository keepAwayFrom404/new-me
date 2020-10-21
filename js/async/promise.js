// 传递给Promise的参数应该是resolve和reject因为resolve是完成之意（可能成功也可能失败类似于Promise.resolve()对于传入的Promise或者thenable会展开，而reject不会）；传递给then的参数应该为fulfilled和rejected更加准确。
// const fetchX = 1
// let fetchY = Promise.resolve(2).then(res => {
//   setTimeout(() => {
//     return 2
//   }, 1000);
// })  

// function add(getX, getY) {
//   return Promise.all([getX, getY]).then(values => {
//     return values[0] + values[1]
//   })
// }

// add(fetchX, fetchY).then(sum => {
//   console.log(sum);
// })


// const p = {
//   then: function(cb) {
//     // a.b()
//     cb(42)
//   }
// }

// Promise.resolve(p).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// const p7 = new Promise((reslove, reject) => {
//   reject('opps')
// })

// p7.then((fulfilled) => {
//   console.log('ok');
// })
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 done')
  }, 1500);
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 done')
  }, 1000);
})

if(!Promise.all1) {
  Promise.all1 = function(prs) {
    return new Promise((resolve, reject) => {
      let result = [],count = prs.length
      function checkDone() {
        if(--count === 0) {
          resolve(result)
        }
      }
      for(let key of prs.keys()) {
        prs[key].then(res => {
          result[key] = res
        },reject).then(checkDone)
      }
    })
  }
}

Promise.all1([p1,p2]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})