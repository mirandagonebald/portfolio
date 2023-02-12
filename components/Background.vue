<script setup lang="ts"></script>

<template>
  <div class="overflow-hidden fixed inset-8 z-1 b-1 b-black dark:b-white">
    <div id="background" class="dark:opacity-90"></div>
  </div>
</template>

<style scoped lang="scss">
#background {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url("/noise.png") repeat 0 0;
  visibility: visible;
  animation: bg-animation 0.2s infinite;
}

@keyframes bg-animation {
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
