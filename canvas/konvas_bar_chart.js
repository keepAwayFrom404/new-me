function HistogramChart(options) {
  this._init(options)
}

HistogramChart.prototype = {
  _init: function(options) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.w = options.w || 0
    this.h = options.h || 0
    this.data = options.data || []

    const x0 = 0
    const y0 = 0
    // 整体的组，位置在设置的x,y处
    this.group = new Konva.Group({
      x: this.x,
      y: this.y
    })
    const bsLine = new Konva.Line({
      points: [x0,y0,x0+this.w,y0],
      strokeWidth: 1,
      stroke:'lightgreen'
    })
    this.group.add(bsLine)

    this.rectGroup = new Konva.Group({
      x: 0,
      y: 0
    })
    this.group.add(this.rectGroup)
    this.textPercentGroup = new Konva.Group({
      x: 0,
      y: 0
    })
    this.group.add(this.textPercentGroup)

    const reactPaddingWidth = this.w / this.data.length
    const height = this.h
    this.data.forEach((item, idx) => {
      const rect = new Konva.Rect({
        x: x0 + (1/4+idx) * reactPaddingWidth,
        y: y0 - item.value * height,
        width: 1 / 2 * reactPaddingWidth,
        height: item.value * height,
        fill: item.color,
        opacity: 0.8,
        cornerRadius: 10
      })
      this.rectGroup.add(rect)

      const text = new Konva.Text({
        x: x0 + idx * reactPaddingWidth,
        y: y0 - item.value * height - 14,
        fontSize: 14,
        text: item.value*100+'%',
        fill: item.color,
        width: reactPaddingWidth,
        align: 'center',
        name: 'textPercent'
      })
      this.textPercentGroup.add(text)

      const textBottem = new Konva.Text({
        x: x0 + (1/2+idx) * reactPaddingWidth,
        y: y0 + 14,
        fontSize: 14,
        text: item.name,
        fill: item.color,
        rotation: 30
      })
      this.group.add(textBottem)
    })
  },
  addToGroupLayer(arg) {
    arg.add(this.group)
  },
  playAnimate() {
    this.rectGroup.getChildren().each((item, idx) => {
      item.y(0)
      item.height(0)
      item.to({
        duration: 1,
        y: 0 - this.data[idx].value * this.h,
        height: this.data[idx].value * this.h
      })
    })
    this.textPercentGroup.getChildren().each((item, idx) => {
      item.y(0 - 14)
      item.height(0)
      item.to({
        duration: 1,
        y: 0 - this.data[idx].value * this.h - 14,
        height: this.data[idx].value * this.h
      })
    })
  }
}