<script setup lang="ts">
const sound = useLocalStorage("sound", true);
</script>

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

  <client-only>
    <div
      class="z-1 cursor-pointer fixed right-10 bottom-10 text-white"
      @click="sound = !sound"
    >
      <transition name="rotate" mode="out-in">
        <div v-if="sound" class="i-akar-icons-sound-on" />

        <div v-else class="i-akar-icons-sound-off" />
      </transition>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.3s ease;
}

.rotate-enter-from {
  transform: rotate(0);
  opacity: 0;
}

.rotate-leave-to {
  transform: rotate(-45deg);
  opacity: 0;
}
</style>
