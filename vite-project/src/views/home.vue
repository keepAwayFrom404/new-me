<template>
  <div>
    <div>i am home</div>
    <div>{{$store.state.count}}</div>
    <button @click="$store.commit('increment')">add</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>