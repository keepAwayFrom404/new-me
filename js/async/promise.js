// 传递给Promise的参数应该是resolve和reject因为resolve是完成之意（可能成功也可能失败类似于Promise.resolve()对于传入的Promise或者thenable会展开，而reject不会）；传递给then的参数应该为fulfilled和rejected更加准确。
const fetchX = 1
let fetchY = Promise.resolve(2).then(res => {
  setTimeout(() => {
    return 2
  }, 1000);
})  

function add(getX, getY) {
  return Promise.all([getX, getY]).then(values => {
    return values[0] + values[1]
  })
}

add(fetchX, fetchY).then(sum => {
  console.log(sum);
})


const p = {
  then: function(cb) {
    a.b()
    cb(42)
  }
}

Promise.resolve(p).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})