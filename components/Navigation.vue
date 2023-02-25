<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const route = useRoute();
const { playSound } = useSfx("/sounds/white_noise", {
  volume: 0.7,
  duration: 300,
});

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
  <nav class="z-3 absolute right-8 top-4">
    <ul class="flex flex-col items-end">
      <li
        v-for="link in menu"
        class="text-right h-[24px] flex items-center select-none"
      >
        <nuxt-link :to="link.path">
          <transition name="slide" mode="out-in">
            <glitched-element
              @click="playSound()"
              v-if="link.path !== route.path"
              :options="{ playMode: 'click', timing: { duration: 300 } }"
              :inline="true"
            >
              <div class="uppercase">{{ link.text }}</div>
            </glitched-element>

            <div v-else class="i-mdi-square-medium mr-[-4px]" />
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
