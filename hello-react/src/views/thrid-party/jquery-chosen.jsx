import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import $ from 'jquery'
window.jQuery = $
require('chosen-js') 
import 'chosen-js/chosen.min.css'
class Chosen extends Component {
  componentDidMount() { 
    this.$el = $(this.el)
    this.$el.chosen()
    this.$el.on('change', this.handlChange)
  }
  componentWillUnmount() {
    this.$el.off('change', this.handlChange)
    this.$el.chosen('destroy')
  }
  componentDidUpdate(prevProps) { 
    if(prevProps.children !== this.props.children) {
      this.$el.tigger('chosen:update')
    }
  } 
  handlChange = (e) => {
    this.props.onChange(e.target.value)
  }
  render() {
    return <div>
      <select ref={el => this.el = el}>
        {
          this.props.children
        }
        </select>
    </div>
  }
}

function App() {
  const handleChange = (e) => {
    console.log(e, 'select change')
  }
  return <Chosen onChange={handleChange}>
    <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
  </Chosen>
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}