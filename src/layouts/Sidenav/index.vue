<template>
  <div class="side-nav d-flex flex-column" :class="{ 'is-collapsed': isCollapse }">
    <div class="user-info-block p-3 d-flex" v-if="!isCollapse">
      <el-avatar :size="72" class="me-2" style="min-width: 72px">
        <img src="@/assets/images/userAvatar.png" />
      </el-avatar>
      <div>
        <H4>minhnv1</H4>
        <H6>minhnv1 director</H6>
        <span class="user-action-text">change password</span>
        <span class="user-action-text">logout</span>
      </div>
    </div>
    <el-scrollbar>
      <el-menu default-active="2" class="menu-vertical" :collapse="isCollapse">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="expand-nav-button" @click="toggleCollapse">
      <el-icon><icon-menu /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>
<style lang="scss" scoped>
.side-nav {
  background-color: white;
  height: 100%;
  width: 250px;
  transition: width 0.3s;
  &.is-collapsed {
    width: 64px;
  }
  border-right: 1px solid var(--el-menu-border-color);
  ::v-deep(.el-menu) {
    border-right: none !important;
  }
}

.expand-nav-button {
  height: 56px;
  border-top: 1px solid var(--el-menu-border-color);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}

.menu-vertical {
  height: 100%;
}

.user-info-block {
  border-bottom: 1px solid var(--el-menu-border-color);
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  &.hidden {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  }
}
.user-action-text {
  color: var(--el-color-primary);
  text-decoration: underline;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}
</style>
