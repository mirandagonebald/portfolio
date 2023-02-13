<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const route = useRoute();

const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const menu = computed(() => {
  return data.story.content.navbar_menu.map((menuLink: any) => {
    return {
      type: "link",
      path: `${menuLink.link.story.url === "/" ? "" : "/"}${
        menuLink.link.story.url
      }`,
      text: menuLink.link.story.name,
    };
  });
});
</script>

<template>
  <nav class="absolute right-8 top-4">
    <ul class="flex flex-col items-end">
      <li v-for="link in menu" class="text-right h-[24px] flex items-center">
        <nuxt-link :to="link.path">
          <transition name="slide" mode="out-in">
            <glitched-element
              v-if="link.path !== route.path"
              :options="{ playMode: 'click', timing: { duration: 300 } }"
              :inline="true"
            >
              <div clas="capitalize">{{ link.text }}</div>
            </glitched-element>

            <div
              v-else-if="link.path === route.path"
              class="i-mdi-square-medium mr-[-4px]"
            />
          </transition>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 300ms;
}
</style>
