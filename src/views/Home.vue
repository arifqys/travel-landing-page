<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap w-full mb-10">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            All Destinations
          </h1>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="destination in destinations"
          :key="destination.name"
          class="xl:w-1/4 md:w-1/2 p-4"
        >
          <router-link
            :to="{
              name: 'destination-details',
              params: { slug: destination.slug }
            }"
          >
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                :src="require(`@/assets/${destination.image}`)"
                :alt="destination.name"
              />
              <h3
                class="tracking-widest text-blue-500 text-xs font-medium title-font"
              >
                {{ destination.tagline }}
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                {{ destination.name }}
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Home",
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
