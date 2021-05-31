function creatCount(init) {
  let num = init || 0
  return {
    add: function() {
      num += 1
      return num
    }
  }
}

const test = creatCount(10)

test.add()

function makePow(y) {
  return function(x) {
    return Math.pow(x, y)
  }
}
const pow2 = makePow(2)
const pow3 = makePow(3)

// 定义数字 0
var zero = function (f) {
  return function (x) {
      return x;
  }
};

// 定义数字 1
var one = function (f) {
  return function (x) {
      return f(x);
  }
};

function add(n, m) {
  return function (f) {
      return function (x) {
          return m(f)(n(f)(x));
      }
  }
}


var two = add(one, one);
var three = add(one, two);
// let five = add(two, three)
var five = add(two, three);
(three(function () {
  console.log('print 3 times');
}))();