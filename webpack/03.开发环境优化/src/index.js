import './styles/index.css'
import './styles/index.less'
import print from './print'

console.log('index.js 加载');

print()

function add(x, y) {
  return x + y
}

console.log(add(2,3));

if(module.hot) {
  module.hot.accept('./print.js', function() {
    print()
  })
}