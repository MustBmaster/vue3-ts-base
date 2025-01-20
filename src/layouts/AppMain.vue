<template>
  <transition name="fade-transform" mode="out-in">
    <div class="bg-white page-content">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const key = computed(() => route.path)
</script>

<style lang="scss" scoped>
.page-content {
  margin-right: 24px;
}
</style>
