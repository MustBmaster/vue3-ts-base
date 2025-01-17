<template>
  <div v-if="!item.meta?.hidden">
    <el-sub-menu v-if="item.children" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <NavItem v-for="(child, index) in item.children" :key="index" :item="child" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.meta?.icon" />
      </el-icon>
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { RouteRecord } from '@/interfaces/route'

// Định nghĩa props item với kiểu RouteRecord
const props = defineProps<{
  item: RouteRecord
}>()

console.log(props.item)
</script>

<style scoped></style>
