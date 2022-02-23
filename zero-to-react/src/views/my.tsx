import React from 'react'

interface myProps {
  num?:number,
  text:string,
}

function My(props:myProps) {
  return <div>{props.text}{props.num}</div>
}

export default function() {
  return <My text="使用ts。" num={2} />
}