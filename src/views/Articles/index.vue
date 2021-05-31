<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Articles" />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">
    <Articles layout="grid" :show-view-all="false" :articles="articles.data" />

    <div class="mt-8 sm:mt-12">
      <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none"
              @click="showMoreArticles"
              v-if="articles.links.next!==null">
        <span v-if="loading">Loading...</span>
        <span v-else>View More</span>
      </button>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
import Articles from "@/components/Articles";
import { useArticle } from "@/composables/useArticle.js";

export default {
  components: {
    InnerPageHero,
    Articles,
  },

  props: {},

  setup() {
    let { fetchArticles, loading, articles } = useArticle();

    fetchArticles();

    function showMoreArticles() {
      fetchArticles({
        showMore: true,
        page: articles.value.meta.current_page + 1
      });
    }

    return {
      articles,
      loading,
      showMoreArticles,
    };
  },
};
</script>