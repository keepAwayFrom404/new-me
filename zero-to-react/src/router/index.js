import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../views/app'
import Home from '../views/home'
import About from '../views/about'
import My from '../views/my'
import store from '../store/reducer'
import '../styles/App.css'
import '../styles/App.less'

function NotFound() {
  return <div>404</div>
}

export default function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <div><Link to="/">首页</Link></div>
          <div>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/my">my</Link>
          </div>
          <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/my" component={My}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}