import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './index.css'

const HelloWorld: React.ForwardRefRenderFunction<unknown, any> = (props, ref) => {
  const [styleData] = useState({color: 'red', fontSize: '16px'})
  const [isHead] = useState(true)
  const [className] = useState('title')
  const { onClick, changeTitleHandle, title, element } = props

  const [scopeSlot] = useState('scope data')


  const oBtnDbClick = () => {
    console.log('son btn dbclick done!');
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        oBtnDbClick,
      }
    },
  )

  const elementSlot = element(scopeSlot)

  return (
    <>
      <div className={`${className} ${isHead ? 'head': ''}`}
         style={styleData} onClick={onClick}>{title}</div>
      <button onClick={changeTitleHandle}>改变标题</button>
      <h1>{props.children}</h1>
      {elementSlot}
    </>

  )
}
export default forwardRef(HelloWorld)
