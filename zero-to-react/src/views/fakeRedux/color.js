import React, { createContext, useReducer } from 'react';

export const ColorContent =  createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR: 
      return action.color
    default:
      return state
  }
}

export const Color = (props) => {
  const [color, distpatch] = useReducer(reducer, 'blue')
  return (
    <ColorContent.Provider value={{color, distpatch}}>
      {props.children}
    </ColorContent.Provider>
  )
}