import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { INFO } from "./actionUser";// 获取约定类型

function counter(state = {count: 0}, action) {
  const count = state.count
  switch (action.type) {
    case 'add':
      return {count: count + 1}
    case 'reduce':
      return {count: count - 1}
    default:
      return state
  }
}

function reducer(state = {user:[]}, action) {
  switch (action.type) {
    case INFO:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

function combineReducers(state = {}, action) {
  return {
    counter: counter(state.action, action),
    reducer: reducer(state.action, action),
  }
}

const store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

export default store