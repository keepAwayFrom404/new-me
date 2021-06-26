<template>
  <h1>hello vite</h1>
  <h2>
    <span>count is {{count}}*2={{double}}</span>
  </h2>
</template>
<script>
import {ref, computed} from 'vue'
export default {
  setup() {
    const count = ref(6)
    function add() {
      count.value++
    }
    const double = computed(() => count.value*2)
    return {
      count,add,double
    }
  },
}
</script>