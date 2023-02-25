<template>
  <div class="fixed inset-0 z-0">
    <background>
      <navigation />

      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </background>

    <settings />
  </div>
</template>

<style lang="scss">
body {
  @apply font-aldrich h-full bg-light-800 dark:bg-dark-800 text-dark-800 dark:text-light-800;
  transition: background-color 0.4s, color 0.4s;
}
</style>
