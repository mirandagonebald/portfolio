<template>
  <div v-editable="blok">
    <h1 class="text-2xl">{{ blok?.headline }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
