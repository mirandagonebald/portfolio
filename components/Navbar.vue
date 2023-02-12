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
  const menu = data.story.content.navbar_menu.map((menuLink: any) => {
    const link = `/${menuLink.link.cached_url}${
      menuLink.link.cached_url.slice(-1) !== "/" ? "/" : ""
    }`;

    return {
      type: "link",
      link,
      value: menuLink.link.story.name,
    };
  });

  const middleIndex = Math.ceil(menu.length / 2);

  menu.splice(middleIndex, 0, {
    type: "image",
    link: "/",
    value: "/logo.svg",
  });

  return menu;
});
</script>

<template>
  <header class="bg-gray-300 dark:bg-dark-600">
    <nav class="container mx-auto py-8 flex justify-center items-center">
      <ul class="flex items-center gap-2">
        <li v-for="menuLink in navbarMenu">
          <nuxt-link
            v-if="menuLink.type === 'link'"
            :to="menuLink.link"
            class="text-cyan-600 dark:text-cyan-400"
          >
            {{ menuLink.value.toLowerCase() }}
          </nuxt-link>

          <img
            class="mx-6"
            v-else-if="menuLink.type === 'image'"
            :src="menuLink.value"
            alt=""
          />
        </li>

        <button
          @click="toggleDarkMode"
          type="button"
          class="outline-none i-carbon-moon dark:i-carbon-sun"
        />
      </ul>
    </nav>
  </header>
</template>
