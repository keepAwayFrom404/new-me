import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { ThemeContext, themes } from './views/context/theme-context'
function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) { 
      console.log('old:', prevProps)
      console.log('new: ', this.props)
    } 
    render() {
      const { forwardRef, ...rest } = this.props
      return <WrappedComponent ref={forwardRef} {...rest} />
    }
  }
  return React.forwardRef((props, ref) => <LogProps forwardRef={ref} {...props}/>)
}

const FancyButton = React.forwardRef((props, ref) => {
  const onClick = () => {
    console.log('button click')
  }
  return <button onClick={onClick} ref={ref}>{props.children}</button>
})

function App() {
  const ref = React.createRef()
  const handleClick = () => {
    ref.current.click()
    console.log('done')
  }
  return <>
    <FancyButton ref={ref}>Click me</FancyButton>
    <button onClick={handleClick}>click me will focus</button>
  </>
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}