<template>
  <InnerPageHero :image-url="settings.about_image_url" title="About Us" />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20" v-html="settings.about_description"></div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
import { useSettings } from "@/composables/useSettings.js";

export default {
  components: {
    InnerPageHero
  },

  props: {},

  setup() {
    let { settings } = useSettings();

    return {
      settings,
    }
  },
};
</script>