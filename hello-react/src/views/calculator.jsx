import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// 根据传入的类型和数值判断是否沸腾
function BoilingVerdict(props) {
  if(props.celsius >= 100) return <p>The water would boil.</p>
  return <p>The water would not boil.</p>
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
// 数值输入框，受控组件（状态由父组件控制，状态提升）
class TemperatureInput extends Component {
  handleChange = (e) => {
    console.log(this.props.scale, 'change')
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const { scale } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={this.props.value} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  state = {
    value: 0,
    scale: 'c'
  }
  handleCelsiusChange = (value) => {
    this.setState({scale: 'c', value});
  }

  handleFahrenheitChange = (value) => {
    this.setState({scale: 'f', value});
  }
  render() {
    const { value, scale } = this.state
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
    return (
      <div>
        <TemperatureInput onTemperatureChange={this.handleCelsiusChange} value={celsius}  scale="c" />
        <TemperatureInput onTemperatureChange={this.handleFahrenheitChange} value={fahrenheit} scale="f" />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}