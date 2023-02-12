<script setup lang="ts"></script>

<template>
  <div
    class="overflow-hidden fixed inset-8 z-1 b-1 b-dark-800 dark:b-light-800"
  >
    <div id="background" class="absolute inset-[-50%] w-[200%] h-[200vh]" />

    <slot />
  </div>
</template>

<style scoped lang="scss">
#background {
  background: transparent url("/noise_4.png") repeat 0 0;
  animation: static 0.2s infinite;
}

@keyframes static {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}
</style>
