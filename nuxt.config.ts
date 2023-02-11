// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: "6Penckvns8rLayc4gUzO1Qtt",
      },
    ],
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
