import PowerGlitch from "vue-powerglitch";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PowerGlitch);
});
