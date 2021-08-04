import App from '../views/app'
import Home from '../views/home'
import About from '../views/about'
import My from '../views/my'
import FakeRedux from '../views/fakeRedux/index'
import Memo from '../views/memoHook/index'
import RefHook from '../views/refHook/index'

export const routeList = [
  {
    name: '首页',
    router: '/',
    component: App,
  },
  {
    name: 'home',
    router: '/home',
    component: Home,
  },
  {
    name: 'about',
    router: '/about',
    component: About,
  },
  {
    name: 'my',
    router: '/my',
    component: My,
  },
  {
    name: 'fakeRedux',
    router: '/fakeRedux',
    component: FakeRedux,
  },
  {
    name: 'memo',
    router: '/memo',
    component: Memo,
  },
  {
    name: 'refHook',
    router: '/refHook',
    component: RefHook,
  },
]