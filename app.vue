<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="scss">
html,
body,
#__nuxt {
  @apply min-h-screen m-0 p-0;
}

html {
  @apply bg-gray-100;
}

html.dark {
  @apply bg-dark-800 text-light-800;
}
</style>
