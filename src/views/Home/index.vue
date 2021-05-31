<template>
  <div>
    <Hero />

    <div class="py-8 sm:py-20 px-4 sm:px-0 container mx-auto">
      <Articles :articles="articles.data" />
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Articles from "@/components/Articles";
import { useArticle } from "@/composables/useArticle.js";

export default {
  name: 'Home',

  components: {
    Hero,
    Articles,
  },

  setup() {
    let { fetchArticles, articles } = useArticle();

    fetchArticles();

    return {
      articles
    };
  },
}
</script>
