<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const route = useRoute();

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
      text: menuLink.link.story.name,
    };
  });

  return menu;
});
</script>

<template>
  <nav class="absolute right-8 top-4">
    <ul class="flex flex-col items-end">
      <li v-for="menuLink in navbarMenu" class="text-right">
        <nuxt-link :to="menuLink.link">
          <div
            v-if="route.path === menuLink.link"
            class="i-mdi-square-medium mr-[-4px]"
          />

          <span v-else>{{ menuLink.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
