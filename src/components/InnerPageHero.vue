<template>
  <div :class="`relative z-0 ${heightClass}`">
    <img :src="imageUrl?imageUrl:'/images/loading.gif'"
         alt="about"
         class="h-full w-full object-cover">

    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-primary opacity-50"></div>

    <div class="absolute inset-0">
      <div class="container mx-auto px-4 sm:px-0 text-white h-full w-full flex flex-col items-center justify-center sm:justify-end text-2xl sm:text-5xl">
        <div class="sm:mb-8 text-center">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    height: String,
  },

  setup(props) {
    let heightClass = computed(() => {
      if (props.height === 'articleDetail') {
        return "h-auto sm:h-600px";
      }

      return "h-40 sm:h-64";
    });

    return {
      heightClass
    }
  },
};
</script>