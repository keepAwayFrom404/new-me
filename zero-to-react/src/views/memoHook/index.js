import React, { useState, useMemo } from 'react'

function Memo() {
  const [xiaohong, setXiaohong] = useState('小红待客')
  const [zhiling, setZhiling] = useState('志林待客')

  return(
    <>
      <button onClick={() => {setXiaohong(Date.now())}}>小红</button>
      <button onClick={() => {setZhiling(Date.now() + ',志林向我们走来')}}>志林</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  )
}

function ChildComponent({name, children}) {
  function changeXiaohong() {
    console.log('他来拉他来啦 ======》');
    return name + ',小红向我们走来'
  }
  const actionXiaohong = useMemo(() => changeXiaohong(), [name])
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}

export default Memo