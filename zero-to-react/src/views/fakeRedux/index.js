import React from 'react';
import Buttons from './button';
import ShowArea from './text';
import { Color } from './color'


function FakeRedux() {
  return(
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default FakeRedux