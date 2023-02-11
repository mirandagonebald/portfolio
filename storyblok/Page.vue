<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="subBlok in blok?.body"
      :key="subBlok._uid"
      :blok="subBlok"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
