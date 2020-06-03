<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-12 mx-auto">
      <h1
        class="text-3xl font-medium title-font text-gray-900 mb-6 text-center"
      >
        {{ experience.name }}
      </h1>
      <div class="-m-4">
        <div class="p-4 w-full">
          <div class="h-full bg-gray-200 p-8 rounded">
            <p class="leading-relaxed mb-6">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination: function() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
    experience: function() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      );
    }
  }
};
</script>
