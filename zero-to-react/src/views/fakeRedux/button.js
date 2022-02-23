import React, {useContext} from 'react';
import { ColorContent, UPDATE_COLOR } from "./color";

function Buttons() {
  const { distpatch } = useContext(ColorContent)
  return (
    <div>
      <button onClick={() => distpatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
      <button onClick={() => distpatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
    </div>
  )
}

export default Buttons