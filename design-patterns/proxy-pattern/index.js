// 代理对象B监听A在心情好的时候才送花
const Flower = function(){}

const xiaoming = {
  sendFlower: function(target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

const B = {
  receiveFlower: function(flower) {
    A.listenGoodMod(function() {
      A.receiveFlower(flower)
    })
  }
}

const A = {
  receiveFlower: function(flower) {
    console.log('收到花'+flower);
  },
  listenGoodMod: function(fn) {
    setTimeout(() => {
      fn()
    }, 5000);
  }
}


xiaoming.sendFlower(B)