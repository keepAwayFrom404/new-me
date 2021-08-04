import React, { useState, useRef } from 'react'

function RefHook() {
  const inputEle = useRef(null)
  const onBtnClick = () => {
    console.log(inputEle, 'inputEle ====>');
    inputEle.current.value = 'hello ref'
  }

  const [text, setText] = useState('hello')

  return (
    <>
      <input type="text" ref={inputEle} />
      <button onClick={() => onBtnClick()}>在input上展示文字</button>
      <br />
      <br />
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
      {text}
    </>
  )
}

export default RefHook