<template>
  <div>
    <Hero />

    <div class="py-8 sm:py-20 px-4 sm:px-0 container mx-auto">
      <Articles />
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Articles from "@/components/Articles";

export default {
  name: 'Home',

  components: {
    Hero,
    Articles,
  }
}
</script>
