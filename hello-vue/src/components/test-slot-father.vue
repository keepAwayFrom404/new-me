<template>
  <div>
    <test>
      <div slot="default">
        <slot name="fartherDefault"></slot>
      </div>
      <div slot="content">
        <slot name="fartherContent"></slot>
      </div>
    </test>
  </div>
</template>
<script>
import Test from './test-slot'
  export default {
    components: {
      Test,
    },
  }
</script>

<style lang="scss" scoped>

</style>