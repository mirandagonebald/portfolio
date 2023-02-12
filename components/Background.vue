<script setup lang="ts"></script>

<template>
  <div
    class="overflow-hidden fixed inset-8 z-1 b-1 b-dark-800 dark:b-light-800"
  >
    <div
      id="background"
      class="bg-transparent bg-repeat bg-[left_top_0_0] absolute inset-[-50%] w-[200%] h-[200vh] animate-[static_.2s_infinite]"
    />

    <slot />
  </div>
</template>

<style scoped lang="scss">
#background {
  background-image: url("https://a.storyblok.com/f/197316/400x400/2df0ee6f94/noise.webp");
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
