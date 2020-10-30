<template>
  <div>
    <Navbar />

    <router-view />

    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>