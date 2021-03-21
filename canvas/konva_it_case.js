function MyStar(options) {
  this._init(options)
}

MyStar.prototype = {
  _init: function(options) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.r = options.r || 0
    this.outerR = options.outerR || 0
    this.innerFill = options.innerFill || 'red'
    this.outerFill = options.outerFill || 'red'
    this.text = options.text || ''
    
    this.group = new Konva.Group({
      x: this.x,
      y: this.y,
    })
    const innerRadius = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.r,
      fill: this.innerFill,
      opacity: 0.8,
    })
    this.group.add(innerRadius)

    const outerRing = new Konva.Ring({
      x: 0,
      y: 0,
      innerRadius: this.r,
      outerRadius: this.outerR,
      fill: this.outerFill,
      opacity: 0.3,
    })
    this.group.add(outerRing)

    const text = new Konva.Text({
      x: 0 - this.outerR,
      y: 0 - 8,
      width: this.outerR * 2,
      fontSize: 16,
      text: this.text,
      align: 'center',
      stroke: '#fff',
      radius: this.r,
      fill: this.innerFill,
      fontStyle: 'bold',
      fontFamily: '微软雅黑'
    })
    this.group.add(text)
  },
  addGroupToLayer(arg) {
    arg.add(this.group)
  }
}