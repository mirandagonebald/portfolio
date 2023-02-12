<template>
  <div class="fixed inset-0 z-0">
    <background>
      <navigation />

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
  transition: background-color 0.4s, color 0.4s;
}

// .page-enter-active,
// .page-leave-active {
//   transition: all 0.2s;
// }
// .page-enter-from,
// .page-leave-to {
//   opacity: 0;
//   filter: blur(1rem);
// }
</style>
