import React, { useRef, useEffect } from 'react'

export default function useWatch(value, callback, config) {
  const oV = useRef('1')
  const isInit = useRef(true)
  const isWatch = useRef(true)
  useEffect(() => {
    if(isWatch.current) {
      if(isInit.current) {
        isInit.current = false
        if(config?.immediate) callback(oV.current, value)
      } else {
        callback(oV.current, value)
      }
      oV.current = value
    }
  }, [value])
  const unWatch = () => {
    isWatch.current = false
  }
  return unWatch
}
