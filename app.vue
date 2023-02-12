<template>
  <div class="fixed inset-0 z-0">
    <background>
      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </background>

    <color-toggle />
  </div>
</template>

<style lang="scss">
body {
  @apply h-full bg-light-800 dark:bg-dark-800 text-dark-800 dark:text-light-800;
  transition: background-color 0.3s, color 0.3s;
}
</style>
