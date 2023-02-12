<template>
  <div class="fixed inset-0 z-1 bg-light-900 dark:bg-dark-800">
    <background />

    <div class="uppercase fixed bottom-22 left--12 z-1 rotate--90 flex gap-3">
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
  </div>
</template>
