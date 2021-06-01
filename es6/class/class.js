class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    console.log('i am Point tostring');
  }
}

class ColorPoint extends Point {
  constructor(x,y,color) {
    super(x, y)
    this.color = color
  }
  toString() {
    console.log('i am ColorPoint tostring');
  }
}

const p = new ColorPoint(1,2,'red')
p.toString()
console.log(p instanceof Point);
console.log(p instanceof ColorPoint);