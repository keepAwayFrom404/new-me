function Sprite( options ) {
  this._init( options )
}

Sprite.prototype = {
  _init: function(options) {
    this.x = options.x === 0 ? 0 : (options.x || 10)
    this.y = options.y === 0 ? 0 : (options.y || 10)

    this.w = options.w || 75
    this.h = options.h || 112.5

    this.fps = options.fps || 10
    this.originW = 75
    this.originH = 112.5

    this._dirIndex = 0

    this._imgSrc = options.imgSrc || ''

  },
  render: function(ctx) { // 把自己画到画不上
    // 加载图片；启动定时器不停绘制
    const img = new Image()
    const self = this
    img.src = this._imgSrc
    img.onload = function() {
      let frameIndex = 0
      setInterval(function() {
        ctx.clearRect(0, 0 , ctx.canvas.width, ctx.canvas.height)
        ctx.drawImage(img, frameIndex * self.originW, self._dirIndex * self.originH, self.originW, self.originH, self.x, self.y, self.w, self.h)
        frameIndex ++
        frameIndex %= 4
      }, 1000 / self.fps);
    }
  },
  changeDir: function(dir) {
    if(dir === 'left') {
      this._dirIndex = 1
    }
    if(dir === 'right') {
      this._dirIndex = 2
    }
    if(dir === 'up') {
      this._dirIndex = 3
    }
    if(dir === 'down') {
      this._dirIndex = 0
    }
  }
}