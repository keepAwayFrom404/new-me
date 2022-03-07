import React, { useState, useEffect } from 'react'
import { Modal } from 'antd'

export default () => {
  const [visible, setVisible] = useState(false)
  // useEffect(() => {
  //   console.log(visible, 'visible change')
  // })
  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <>
      <Modal onCancel={handleCancel} title="123" visible={visible} />
      <button onClick={() => setVisible(true)}>1232222</button>

    </>
  )
}