import React, { useState } from 'react'
import { Radio } from 'antd'

export default (props) => {
  console.log(props.test, 'props.test ===>')
  const [state, setState] = useState(props.test)
  return <Radio.Group defaultValue={state} buttonStyle="solid">
  <Radio.Button value="a">Hangzhou</Radio.Button>
  <Radio.Button value="b">Shanghai</Radio.Button>
  <Radio.Button value="c">Beijing</Radio.Button>
  <Radio.Button value="d">Chengdu</Radio.Button>
</Radio.Group>
}