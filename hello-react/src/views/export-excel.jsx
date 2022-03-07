import React from 'react'
import excel from './test.xlsx'

export default () => {
  console.log(excel, 'excel ===>')
  return <a download href={excel}>点击excel</a>
}