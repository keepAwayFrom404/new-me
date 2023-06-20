import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import deepEqu from 'deep-equal'
function App() {
  const a = {b: 123}
  const b = {
    b: 123
  }
  console.log(deepEqu(a, b), '123')
  useEffect(() => {
    error()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
