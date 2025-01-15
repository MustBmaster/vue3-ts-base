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
      <el-menu default-active="1" class="menu-vertical me-1" :collapse="isCollapse">
        <NavItem v-for="item of menu" :title="item.meta?.title || ''" />
      </el-menu>
    </el-scrollbar>
    <div class="expand-nav-button" @click="toggleCollapse">
      <el-icon><icon-menu /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { usePermissionStore } from '@/stores/permisson'
import NavItem from './NavItem.vue'
import type { RouteRecord } from '@/interfaces/route'

const isCollapse = ref(false)
const menu = reactive<RouteRecord[]>([])
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
onMounted(() => {
  usePermissionStore().getAvailableRoutes(['admin'])
  menu.splice(0, menu.length, ...usePermissionStore().routes)
  console.log(menu)
})
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
  ::v-deep(.el-menu-item.is-active) {
    background-color: #e6f7ff !important;
    border-right: 3px solid #1890ff !important;
  }

  ::v-deep(.el-sub-menu__title.is-active) {
    background-color: #e6f7ff !important;
    border-right: 3px solid #1890ff !important;
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
