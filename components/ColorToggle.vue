<template>
  <div
    class="uppercase fixed bottom-23.2 left--13 z-1 rotate--90 flex gap-3 text-dark-800 dark:text-light-800"
  >
    <div
      class="flex items-center cursor-pointer gap-1"
      @click="$colorMode.preference = 'light'"
    >
      <div class="i-mdi-square dark:i-mdi-square-outline"></div>

      <div class="mb--1">light</div>
    </div>

    <div
      class="flex items-center cursor-pointer gap-1"
      @click="$colorMode.preference = 'dark'"
    >
      <div class="i-mdi-square-outline dark:i-mdi-square"></div>

      <div class="mb--1">dark</div>
    </div>
  </div>
</template>
