<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
html, body, #app, .container {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}
</style>
