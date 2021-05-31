<template>
  <div class="flex flex-col h-full">
    <Navbar />

    <div class="flex-1">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { useSettings } from "@/composables/useSettings.js";

export default {
  components: {
    Navbar,
    Footer,
  },

  setup() {
    let { fetchSettings } = useSettings();

    fetchSettings();
  }
};
</script>