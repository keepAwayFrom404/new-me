import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    taskList: [],
    curTab: 'all',
  },
  mutations: {
    SET_LIST(state, list) {
      state.taskList = list
    },
    ADD_TASK(state, value) {
      state.taskList.push({
        done: false,
        value,
      })
    },
    DELETE_TASK(state, idx) {
      state.taskList.splice(idx, 1)
    },
    DELETE_DONE_TASK(state) {
      state.taskList = state.taskList.filter(item => !item.done)
    },
    CHANGE_CUR_TAB(state, val) {
      state.curTab = val
    }
  },
  getters: {
    SHOW_COUNT(state) {
      const doingCount = state.taskList.filter(item => !item.done).length
      return `${doingCount} 条剩余`
    },
    SHOW_LIST(state) {
      switch(state.curTab) {
        case 'all':
          return state.taskList
        case 'doing':
          return state.taskList.filter(item => !item.done)
        case 'done':
          return state.taskList.filter(item => item.done)
        default:
          return state.taskList
      } 
    }
  },
  actions: {
    GET_TASK_LIST(context) {
      axios.get('http://127.0.0.1:8081/src/data/data.json').then(({data}) => {
        context.commit('SET_LIST', data)
      })
    }
  }
})
export default store