const _counter = new WeakMap()
const _action = new WeakMap()

class CountDown {
  constructor(counter, action) {
    _counter.set(this, counter)
    _action.set(this, action)
  }
  des() {
    let counter = _counter.get(this)
    if(counter < 0) return
    counter --
    _counter.set(this, counter)

    if(counter === 0) {
      _action.get(this)()
    }
  }
}

const c = new CountDown(2, () => console.log('done'))
c.des()
c.des()