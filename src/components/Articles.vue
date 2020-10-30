<template>
  <div>
    <div class="space-y-8 sm:space-y-16">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>

    <div class="mt-8 sm:mt-12">
      <router-link to="/articles" class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">View All</router-link>
    </div>
  </div>
</template>

<script>
import Article from "@/components/Article";

export default {
  components: {
    Article,
  },

  props: {},

  setup() {},
};
</script>