<template>
  <div class="fixed inset-0 z-0 bg-light-800 dark:bg-dark-800">
    <background>
      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </background>

    <color-toggle />
  </div>
</template>

<style lang="scss">
html,
body {
  @apply h-full text-dark-800 dark:text-light-800;
}
</style>
