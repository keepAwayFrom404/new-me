class HistoryRouter {
  constructor() {
    this.routers = {}
    this.listenPopState()
    this.listenLink()
  }
  listenPopState() {
    window.addEventListener('popstate', (e) => {
      const state = e.state || {}
      const path = state.path || ''
      this.dealPathHandler(path)
    })
  }
  listenLink() {
    window.addEventListener('click', (e) => {
      const dom = e.target
      if(dom.tagName.toUppercase() === 'A' && dom.getAttribute('href')) {
        e.preventDefault()
        this.assign(dom.getAttribute('href'))
      }
    })
  }
  load() {
    const path = location.pathname
    this.dealPathHandler(path)
  }
  register(path, callback = function(){}) {
    this.routers[path] = callback
  }
  registerIndex(callback = function(){}) {
    this.routers['/'] = callback
  }
  registerNotFound(callback = function(){}){
    this.routers['404'] = callback;
  }
  registerError(callback = function(){}){
    this.routers['error'] = callback;
  }
  assign(path){
    history.pushState({path},null,path);
    this.dealPathHandler(path)
  }
  replace(path) {
    history.pushReplace({path}, null,path)
    this.dealPathHandler(path)
  }
  dealPathHandler(path) {
    let handler
    if(!this.routers[path]) handler = (this.routers['404'] || function(){})
    else handler = this.routers[path];
    try {
      handler.call(this)
    } catch (error) {
      console.error(e);
      (this.routers['error'] || function(){}).call(this,e);
    }
  }
}