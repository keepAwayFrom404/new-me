<template>
  <div class="result-panel">
    <div class="result-panel__content">
      <template v-if="showList.length">
        <div class="content__item" v-for="(item,idx) in showList" :key="idx">
          <el-checkbox v-model="item.done">{{item.value}}</el-checkbox>
          <el-button style="margin-left: 20px" type="text" @click="storeDeleteTask(idx)">删除</el-button>
        </div>
      </template>
      <div v-else>No Data</div>
    </div>
    <div class="result-panel__opration">
      <div class="text">{{showCount}}</div>
      <el-radio-group v-model="currentTab" @change="tabChange">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="doing">未完成</el-radio-button>
        <el-radio-button label="done">已完成</el-radio-button>
      </el-radio-group>
      <el-button type="text" @click="storeDeleteDone">清除已完成</el-button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
  export default {
    name: 'ResultPanel',
    data() {
      return {
        currentTab: 'all'
      }
    },
    computed: {
      ...mapState(['taskList','curTab']),
      ...mapGetters({showCount: 'SHOW_COUNT',showList: 'SHOW_LIST'}),
    },
    methods: {
      ...mapMutations({storeDeleteTask: 'DELETE_TASK', storeDeleteDone: 'DELETE_DONE_TASK',storeChangeCurTab: 'CHANGE_CUR_TAB'}),
      tabChange(val) {
        this.storeChangeCurTab(val)
      }
    },
  }
</script>

<style scoped>
.result-panel {
  width: 600px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin: 20px auto 0;
}
.result-panel__content {
  text-align: left;
  margin-left: 180px;
}
.result-panel__opration {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
</style>