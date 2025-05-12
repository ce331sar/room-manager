<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Header />
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
</script>
<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f9f9f9;
}
</style>
