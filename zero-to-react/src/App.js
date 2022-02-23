import React, { Component } from 'react';
import { Button } from 'antd'
// import './styles/App.css'
import 'antd/dist/antd.css';
// import {hot} from 'react-hot-loader'
// import App from './views/app.js'
import { ThemeContext, themes } from './views/contextHook';
class ThemedButton extends Component {
  // static contextType = ThemeContext
  componentDidMount() {
    console.log(this.context, 'componentDidMount');
  }
  
  render() { 
    const props = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          return <Button {...props} style={{backgroundColor: value.background}}></Button>;
        }}
      </ThemeContext.Consumer>
    )
  }
}
 
function Toolbar(props) {
  return (
    <div>
      <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
    </div>
  )
}

class App extends Component {
  state = {
    theme: themes.light
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
        <section>
          <ThemedButton></ThemedButton>
        </section>
      </div>
    )
  }
}


if (module.hot) {
  module.hot.accept();
}
 
export default App;