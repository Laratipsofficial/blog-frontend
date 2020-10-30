<template>
  <InnerPageHero image-url="/images/image-3.jpg"
                 title="Contact Us" />

  <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0">
    <div class="grid sm:grid-cols-3 sm:gap-4">
      <div><span class="text-gray-500">Address:</span> Lorem Ipsum</div>
      <div><span class="text-gray-500">Phone:</span> +0987654321</div>
      <div><span class="text-gray-500">Email:</span> info@laratipsofficial.com</div>
    </div>

    <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198741.27544863918!2d-77.15466025854397!3d38.89351276362806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2snp!4v1604083616504!5m2!1sen!2snp"
                class="w-full"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"></iframe>
      </div>

      <form class="p-8 bg-gray-300 shadow rounded space-y-4">
        <div>
          <input type="text"
                 placeholder="Enter Name"
                 class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                 required>
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>

        <div>
          <input type="email"
                 placeholder="Enter Email"
                 class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                 required>
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>

        <div>
          <input type="phone"
                 placeholder="Phone Number"
                 class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                 required>
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>

        <div>
          <textarea placeholder="Enter Message" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" rows="5" required></textarea>
          <!-- <span class="text-red-600 text-sm">The error message</span> -->
        </div>

        <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
          Lorem ipsum dolor sit amet consectetur.
        </div> -->

        <!-- <div class="px-4 py-2 bg-green-600 text-white rounded">
          Lorem ipsum dolor sit amet consectetur.
        </div> -->

        <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";

export default {
  components: {
    InnerPageHero,
  },

  props: {},

  setup() {},
};
</script>