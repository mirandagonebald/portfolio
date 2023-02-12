<template>
  <div
    class="uppercase fixed bottom-22 left--12 z-1 rotate--90 flex gap-3 text-dark-800 dark:text-light-800"
  >
    <div
      class="flex items-center cursor-pointer gap-1"
      @click="$colorMode.preference = 'light'"
    >
      <div class="i-mdi-square dark:i-mdi-square-outline"></div>

      <div>light</div>
    </div>

    <div
      class="flex items-center cursor-pointer gap-1"
      @click="$colorMode.preference = 'dark'"
    >
      <div class="i-mdi-square-outline dark:i-mdi-square"></div>

      <div>dark</div>
    </div>
  </div>
</template>
