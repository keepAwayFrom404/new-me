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