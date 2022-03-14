import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { ThemeContext, themes } from './views/context/theme-context'
class App extends Component {
  changeTheme = () => {
    this.setState(pre => ({theme: pre.theme === themes.light ? themes.dark : themes.light}))
  }

  state = {
    theme: themes.light,
    toggleTheme: this.changeTheme
  }

  render() {
    return <ThemeContext.Provider value={this.state}>
      <Content/>
    </ThemeContext.Provider>
  }
}
function Content() {
  return <div>
    <ThemeButton />
  </div>
}

class ThemeButton extends Component {
  render() {
    return <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => {
          return <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>toggle theme</button>
        }
      }
    </ThemeContext.Consumer>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}