<template>
  <div :class="{'grid sm:grid-cols-5 gap-2 sm:gap-12': isList}">
    <div class="h-64"
      :class="{
        'sm:h-400px sm:col-span-3': isList,
        'sm:col-span-5': isGrid,
      }">
      <img :src="article.image_url"
           :alt="article.title"
           class="w-full h-full object-cover">
    </div>
    <div class="mt-1 sm:col-span-2 flex flex-col justify-between">
      <div :class="{
        'sm:py-2 sm:mt-0': isGrid
      }">
        <div class="text-base text-gray-500">{{ article.category.name }}</div>
        <h3 class="mt-1 leading-tight text-2xl">
          <router-link :to="`/articles/${article.slug}`"
                       class="hover:text-primary font-bold transition-colors duration-300">
            {{ article.title }}
          </router-link>
        </h3>
        <div class="mt-2 text-gray-700">{{ article.small_description }}</div>
      </div>
      <div class="mt-1 text-base text-gray-500 flex items-center">
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
        <div class="ml-2">
          {{ article.created_at_for_human }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    layout: {
      type: String,
      default: "list"
    },
    article: Object,
  },

  setup(props) {
    let isGrid = computed(() => {
      return props.layout === 'grid';
    });

    let isList = computed(() => {
      return props.layout === 'list';
    });

    return {
      isGrid,
      isList,
    }
  },
};
</script>