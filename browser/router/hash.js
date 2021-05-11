class HashRouter {
  constructor() {
    this.routers = {}
    window.addEventListener('hashchange', this.load.bind(this))
  }
  register(hash, callback = function(){}) {
    this.routers[hash] = callback
  }
  registerIndex(callback = function(){}){
    this.routers['index'] = callback;
  }
  registerNotFound(callback = function(){}) {
    this.routers['404'] = callback
  }
  registerError(callback = function(){}){
    this.routers['error'] = callback;
  }
  load() {
    const hash  = location.hash.slice(1)
    let handler
    if(!hash) handler = this.routers.index
    else if(!this.routers[hash]) handler = (this.routers['404'] || function(){})
    else handler = this.routers[hash]
    try {
      handler.call(this)
    } catch (error) {
      console.log(error);
      (this.routers['error']|| function(){}).call(this, error)
    }
  }
}