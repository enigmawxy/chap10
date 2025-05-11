<template>
  <div class="main-view">
    <component :is="tabMap[currentTab]" />
  </div>
</template>

<script setup>
const props = defineProps({
  currentTab: String,
  tabMap: Object
})
</script>

<style scoped>
.main-view {
  flex: 1;
  padding: 24px;
  background: #2e3b4e;
  min-height: 100vh;
}
</style>
