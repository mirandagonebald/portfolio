// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
      },
    ],
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/partytown",
  ],
  css: ["@unocss/reset/tailwind.css"],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    payloadExtraction: false,
  },
  colorMode: {
    classSuffix: "",
  },
});
