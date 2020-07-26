<template>
  <div id="app">
    <el-button type="primary">click</el-button>
  </div>
</template>

<script>
import * as test from './a'
export default {
  name: 'App',
  mounted () {
    console.log(test.interval);
    setTimeout(() => {
      clearInterval(test.interval)
    }, 2000);
    
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
