<template>
  <InnerPageHero :image-url="article.image_url"
                 :title="article.title"
                 height="articleDetail" />

  <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between">
      <div class="flex items-center text-gray-700">
        <div>
          <svg class="w-4 h-4"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
        </div>
        <div class="ml-1">{{ article.category.name }}</div>
      </div>

      <div class="mt-2 sm:mt-0 text-sm flex items-center text-gray-700">
        <div>
          <svg class="w-4 h-4"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="ml-1">
          {{ article.created_date }}
        </div>
      </div>
    </div>

    <div class="mt-4 sm:mt-16" v-html="article.description"></div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
import { useArticle } from "@/composables/useArticle.js";

export default {
  components: {
    InnerPageHero,
  },

  props: {
    slug: String,
  },

  setup(props) {
    let { articleDetail, articleDetailLoading, fetchArticleDetail } = useArticle();

    fetchArticleDetail({
      slug: props.slug
    });

    return {
      article: articleDetail,
      loading: articleDetailLoading,
    }
  },
};
</script>