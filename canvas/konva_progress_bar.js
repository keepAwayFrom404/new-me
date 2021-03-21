function ProgressBar(options) {
  this._init(options)
}

ProgressBar.prototype = {
  _init: function(options) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.w = options.w || 0
    this.h = options.h || 0

    this.fillStyle = options.fillStyle || 'red'
    this.strokeStyle = options.strokeStyle || 'red'

    const innerRect = new Konva.Rect({
      x: this.x,
      y: this.y,
      width: 0,
      height: this.h,
      opacity: 0.7,
      fill: this.fillStyle,
      cornerRadius: this.h / 2,
      id: 'innerRect',
    })

    const outerRect = new Konva.Rect({
      x: this.x,
      y: this.y,
      width: this.w,
      height: this.h,
      stroke: this.strokeStyle,
      strokeWidth: 4,
      cornerRadius: this.h / 2,
    })

    this.group = new Konva.Group({
      x: 0,
      y: 0
    })

    this.group.add(innerRect)
    this.group.add(outerRect)

  },
  changeValue(val) {
    if(val > 1) {
      val /= 100
    }

    const width = this.w * val
    const innerRect = this.group.findOne('#innerRect')
    innerRect.to({
      width,
      duration: 1.4,
      easing: Konva.Easings.StrongEaseInOut
    })
  },
  addToGroupLayer(arg) {
    arg.add(this.group)
  }
}