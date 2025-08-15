<script setup lang="ts">
import {RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <main class="max-w-screen-xl mx-auto p-4">
    <RouterView />
  </main>
  <!-- <RouterView /> -->
</template>
