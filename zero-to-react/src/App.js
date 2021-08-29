import React, { Component } from 'react';
import { Button } from 'antd'
// import './styles/App.css'
import 'antd/dist/antd.css';
// import {hot} from 'react-hot-loader'
// import App from './views/app.js'
import ThemeContext from './views/contextHook';
class ThemedButton extends Component {
  static contextType = ThemeContext
  render() { 
    return <Button theme={this.context}>theme button</Button>;
  }
}
 
function Toolbar() {
  return (
    <div>
      <ThemedButton ></ThemedButton>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
    )
  }
}


if (module.hot) {
  module.hot.accept();
}
 
export default App;