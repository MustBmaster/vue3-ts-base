<template>
  <div class="page-container d-flex">
    <SideNav />
    <div class="w-100">
      <div class="page-header">
        <h4 class="m-0">pageherdeer</h4>
      </div>
      <div class="content-frame">
        <el-scrollbar max-height="100%">
          <div class="bg-white page-content">
            <AppMain />
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideNav from './Sidenav/index.vue'
import AppMain from './AppMain.vue'
</script>
<style lang="scss" scoped>
.page-container {
  height: 100vh;
  width: 100vw;
}
.content-frame {
  padding: 24px 0 24px 24px;

  height: calc(100vh - 72px);
}

.page-header {
  height: 72px;
  padding: 22px 24px;
  background-color: white;
}
.page-content {
  margin-right: 24px;
}
</style>
