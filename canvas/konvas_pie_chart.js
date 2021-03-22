function PieChart(options) {
  this._init(options)
}

PieChart.prototype = {
  _init: function(options) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.r = options.r || 0
    this.data = options.data || []

    this.group = new Konva.Group({
      x: this.x,
      y: this.y
    })
  
    this.wedgeGroup = new Konva.Group({
      x: 0,
      y: 0
    })
    this.group.add(this.wedgeGroup)

    this.textGroup = new Konva.Group({
      x: 0,
      y: 0
    })
    this.group.add(this.textGroup)

    let tempAngle = -90
    this.data.forEach((item, idx) => {
      const angle = item.value*360
      const wedge = new Konva.Wedge({
        x:0,
        y:0,
        angle: angle,
        radius: this.r,
        fill: item.color,
        rotation: tempAngle,
      })
      this.wedgeGroup.add(wedge)

      const textAngle = tempAngle + 1/2*angle
      const text = new Konva.Text({
        x: (this.r + 15) * Math.cos(textAngle*Math.PI/180),
        y: (this.r + 15) * Math.sin(textAngle*Math.PI/180),
        text: item.value*100+'%',
        fill: item.color,
      })
      if(textAngle > 90 && textAngle < 270) {
        text.x(text.x() - text.width()) 
      }
      this.textGroup.add(text)
      tempAngle+=angle
    })

    const circle = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.r + 5,
      stroke: '#ccc',
      strokeWidth: 2
    })

    this.group.add(circle)
  },
  addToGroupLayer(arg) {
    arg.add(this.group)
  },
  playAnimate() {
    const wedges = this.wedgeGroup.getChildren()
    wedges.each(item => item.angle(0))
    function animatePie(num) {
      if(num >= wedges.length) return
      const item = wedges[num]
      item.angle(0)
      item.to({
        angle: data[num].value*360,
        duration: 2 * data[num].value,
        onFinish: function() {
          num++
          animatePie(num)
        }
      })
    }
    animatePie(0,0)
  }
}