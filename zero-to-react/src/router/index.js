import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from '../views/app'
import Home from '../views/home'
import About from '../views/about'

function NotFound() {
  return <div>404</div>
}

export default function() {
  return (
    <BrowserRouter>
      <div>
        <div><Link to="/">首页</Link></div>
        <div>
          <Link to="/home">home</Link>
          <Link to="/about">about</Link>
        </div>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}