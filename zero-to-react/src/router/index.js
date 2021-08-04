import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/reducer'
import { routeList } from './config'
import '../styles/App.css'
import '../styles/App.less'

function NotFound() {
  return <div>404</div>
}

export default function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {
          routeList.map(item => {
            return <Link key={item.router} to={item.router}>{item.name}</Link>
          })
        }
        <br />
        <Switch>
          {
            routeList.map(item => {
              return <Route exact key={item.router} path={item.router} component={item.component}></Route>
            })
          }
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}