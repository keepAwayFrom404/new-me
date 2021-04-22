<template>
  <div id="app">
     <el-input style="width: 600px;margin-right: 20px" v-model="task" placeholder="请输入任务" clearable></el-input>
     <el-button type="primary" @click="addTask">添加事项</el-button>
     <result-panel></result-panel>
  </div>
</template>

<script>
import ResultPanel from './components/resultPanel'
import {mapMutations, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    ResultPanel
  },
  data() {
    return {
      task: ''
    }
  },
  created () {
    this.storeGetTaskList()
  },
  methods: {
    ...mapMutations({storeAddTask:'ADD_TASK'}),
    ...mapActions({storeGetTaskList:'GET_TASK_LIST'}),
    addTask() {
      if(!this.task.trim()) {
        this.$message.error('任务名称不能为空！')
        return
      }
      this.storeAddTask(this.task.trim())
      this.task = ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
