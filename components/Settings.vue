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
      @click="sound = !sound"
      class="z-1 cursor-pointer fixed right-10 bottom-10 text-white"
    >
      <div
        :class="{ active: sound }"
        class="sound-icon on i-akar-icons-sound-on"
      />

      <div
        :class="{ active: !sound }"
        class="sound-icon off i-akar-icons-sound-off"
      />
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.sound-icon {
  @apply absolute bottom-0 right-0;
  transition: opacity 0.3s, transform 0.3s;

  &.on {
    &:not(.active) {
      transform: rotate(180deg);
      opacity: 0;
    }

    &.active {
      opacity: 1;
    }
  }

  &.off {
    &:not(.active) {
      transform: rotate(-180deg);
      opacity: 0;
    }

    &.active {
      opacity: 1;
    }
  }
}
</style>
