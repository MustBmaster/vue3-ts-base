<template>
  <div class="page-container d-flex">
    <SideNav />
    <div class="w-100">
      <div class="page-header">
        <h4 class="m-0">pageherdeer</h4>
      </div>
      <!-- <div class="content-frame">
        <el-scrollbar max-height="100%"><AppMain /></el-scrollbar>
      </div> -->
      <el-tabs v-model="activeName" @tab-click="handleClick" class="custom-tab-header">
        <el-tab-pane label="User" name="first" class="content-frame-tab">
          <el-scrollbar max-height="100%"><AppMain /></el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="testtest" name="2" class="content-frame-tab">
          <el-scrollbar max-height="100%"><AppMain /></el-scrollbar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideNav from './Sidenav/index.vue'
import AppMain from './AppMain.vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.content-frame {
  padding: 24px 0 24px 24px;
  height: calc(100vh - 72px);
}
.content-frame-tab {
  height: calc(100vh - 126px);
  padding: 9px 0 24px 24px;
}
.page-container {
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

.page-header {
  height: 72px;
  padding: 22px 24px;
  background-color: white;
}
.custom-tab-header {
  ::v-deep(.el-tabs__header) {
    padding-left: 24px;
  }
}
</style>
