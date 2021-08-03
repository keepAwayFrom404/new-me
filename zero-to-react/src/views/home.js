import React, { useEffect, useState, useCallback } from 'react';
import {connect} from 'react-redux'
import {addAction, reduceAction} from '../store/action'
import Av from "../assets/avatar.jpg"
import axios from 'axios'

function Home (props) {
  const {count, onAddClick, onReduceClick} = props
  const [state, setState] = useState(null)
  const fetchApiCallback = useCallback(() => {
    axios.get('/api/users').then(res => {
      const data = JSON.parse(res.request.responseText)
      setState(data)
    })
  }, [])
  useEffect(() => {
    fetchApiCallback()
  }, [fetchApiCallback])
  return (
    <div>
      <img src={Av} alt="123" />
      <span>我是计数器的值{count}</span>
      <button onClick={onAddClick}>add click</button>
      <button onClick={onReduceClick}>reduce click</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => dispatch(addAction),
    onReduceClick: () => dispatch(reduceAction),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)