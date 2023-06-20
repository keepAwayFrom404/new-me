import React, { useState, useEffect } from 'react'
import { Select } from 'antd'

export default (props) => {
  // console.log(b, '123')
  const Options = [
    {
      label: '1',
      value: {
        a: 1,
        b: {
          c: 1
        }
      }
    },
    {
      label: '2',
      value: {
        a: 2,
        b: {
          c: 2
        }
      }
    },
    {
      label: '3',
      value: {
        a: 3,
        b: {
          c: 3
        }
      }
    },
    {
      label: '4',
      value: {
        a: 4,
        b: {
          c: 4
        }
      }
    },
    {
      label: '5',
      value: {
        a: 5,
        b: {
          c: 5
        }
      }
    },
  ]
  const [value, setValue] = useState(props.test)
  const handleChange = (v) => {
    setValue(v)
    console.log(typeof v,v, 'change===>')
  }
  useEffect(() => {
    setTimeout(() => {
      setValue(JSON.stringify({
        a: 5,
        b: {
          c: 5
        }
      }))
    }, 3000);
  }, [])
  
  
  return <Select style={{width: 200}} onChange={handleChange} value={value}>
    {
      Options.map(item => <Select.Option key={JSON.stringify(item.value)} value={JSON.stringify(item.value)}>{item.label}</Select.Option>)
    }
  </Select>
}