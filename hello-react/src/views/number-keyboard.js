import { NumericInput } from 'numeric-keyboard/dist/numeric_keyboard.react'
import React from 'react';

class App extends React.Component {
  input(val) {
    console.log(val, 'input');
  }
  render() {
    return <div className="input">
      <label>Amount: </label>
      <NumericInput type="number" placeholder="touch to input" onInput={this.input.bind(this)} />
    </div>
  }
}

export default App
