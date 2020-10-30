<template>
  <div class="relative z-0 hero-height">
    <img src="/images/hero.jpg"
         alt="hero"
         class="block w-full h-full object-cover">

    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="px-4 sm:px-0 absolute inset-0 text-white">
      <div class="container mx-auto h-full flex flex-col justify-center">
        <div>Welcome to</div>
        <div class="mt-1 text-6xl font-bold">Laratips</div>
        <div class="mt-2 sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, odio ipsa omnis odit eaque sapiente consectetur voluptatum reiciendis suscipit accusantium pariatur nobis rerum deleniti. Quas hic repellat nihil dolor animi.</div>

        <div class="mt-8 text-primary">
          <svg class="h-10 animate-bounce"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  setup() {},
};
</script>