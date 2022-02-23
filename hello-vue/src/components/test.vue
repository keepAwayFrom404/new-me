<template>
  <div>
    {{title}}
    <slot name="subTitle">
      <el-tooltip v-if="content.content" v-bind="content">
        <span >test</span>
      </el-tooltip>
    </slot>
    <!-- <slot :title="'44444'" name="test">{{title}}</slot> -->
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '123',
      },
      content: {
        type: Object,
        default: () => ({}),
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>