<template>
  <div>
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>