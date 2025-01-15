<template>
  <div>
    <el-menu-item>
      <el-icon><location /></el-icon>
      <template #title>{{ title }}</template>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Declare props with the `props` option, specifying types
const props = defineProps<{
  title: string

}>()
</script>

<style scoped></style>
