import React from 'react'
import ReactDOM from 'react-dom';

class Tick extends React.Component {
  timerId = null
  state = {
    date: new Date()
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Tick/>,
  document.getElementById('root')
);

// setInterval(tick, 1000)

// function formatName(user) {
//   return user.firstName + user.lastName
// }

// const user = {
//   firstName: 'jiahua',
//   lastName: 'li'
// }

// ReactDOM.render(
//   <h1>Hello, {formatName(user)}</h1>,
//   document.getElementById('root')
// );

if (module.hot) {
  module.hot.accept();
}