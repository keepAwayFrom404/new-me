// import styles from './index.less';
import React, { useState, useRef } from 'react'

import HelloWorld from './HelloWorld/index';
import useWatch from '../hooks/useWatch'

export default function IndexPage() {
  const helloRef = useRef({oBtnDbClick: function(){}})
  const [title, setTitle] = useState('hello react')
  const clickHandle = () => {
    console.log('clickDone');
  }

  const unWatch = useWatch(title, (ov: string, nv: string) => {
    console.log(ov, nv, 'changeTitle');
  })

  const changeTitleHandle = () => {
    setTitle(''+Math.random())
    setTimeout(() => {
      unWatch()
    }, 0);
  }

  const childHandle = () => {
    helloRef.current.oBtnDbClick()
  }

  return (
    <div>
      <HelloWorld element={(data: string) => (<div>{data}</div>)} ref={helloRef} title={title} onClick={clickHandle} changeTitleHandle={changeTitleHandle}>哈哈</HelloWorld>
      <button onClick={childHandle}>触发子组件的事件</button>
    </div>
  );
}
