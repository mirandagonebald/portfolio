<script setup lang="ts">
const colorMode = useColorMode();
const storyblokApi = useStoryblokApi();

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const navbarMenu = computed(() => {
  return data.story.content.navbar_menu.map((menuLink: any) => {
    const link = `/${menuLink.link.cached_url}${
      menuLink.link.cached_url.slice(-1) !== "/" ? "/" : ""
    }`;

    return {
      link,
      text: menuLink.link.story.name,
    };
  });
});
</script>

<template>
  <nav class="container py-3 flex justify-end items-center">
    <ul class="flex items-center gap-2">
      <li v-for="menuLink in navbarMenu">
        <nuxt-link :to="menuLink.link" class="text-cyan-600 dark:text-cyan-400">
          {{ menuLink.text.toLowerCase() }}
        </nuxt-link>
      </li>

      <button
        @click="toggleDarkMode"
        type="button"
        class="outline-none i-carbon-moon dark:i-carbon-sun"
      />
    </ul>
  </nav>
</template>
