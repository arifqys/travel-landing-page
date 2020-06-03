<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div
        class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10"
      >
        <div class="w-full sm:p-4 px-4 mb-6">
          <h1 class="title-font font-medium text-6xl mb-2 text-gray-900">
            {{ destination.name }}
          </h1>
          <div class="leading-relaxed">
            Pour-over craft beer pug drinking vinegar live-edge gastropub,
            keytar neutra sustainable fingerstache kickstarter.
          </div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
          <p class="leading-relaxed">Subscribes</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
          <p class="leading-relaxed">Products</p>
        </div>
      </div>
      <div
        class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
      >
        <img
          class="object-cover object-center w-full h-full"
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-blue-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1
            class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"
          >
            Popular Destinations
          </h1>
          <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            Street art subway tile salvia four dollar toast bitters selfies
            quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
            Viral gochujang bitters dreamcatcher.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div
          v-for="experience in destination.experiences"
          :key="experience.name"
          class="p-4 md:w-1/4 sm:mb-0 mb-6"
        >
          <router-link
            :to="{
              name: 'experience-details',
              params: { experienceSlug: experience.slug }
            }"
          >
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                class="object-cover object-center h-full w-full"
                :src="require(`@/assets/${experience.image}`)"
                :alt="experience.name"
              />
            </div>
            <div class="inline-flex items-center">
              <h2
                class="text-xl font-medium title-font text-gray-900 mt-5 mr-2"
              >
                {{ experience.name }}
              </h2>
              <p class="text-xs text-blue-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
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
    }
  },
  computed: {
    destination: function() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>
