import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: Home
  },
  {
    path: "/:slug",
    name: "destination-details",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "destination-details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: "/:slug/:experienceSlug",
        name: "experience-details",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experience-details" */ "../views/DestinationDetailsExperienceDetails.vue"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exists) next();
      else next({ name: "not-found" });
    }
  },
  {
    path: "/404",
    alias: "*",
    name: "not-found",
    component: () =>
      import(
        /* webpackChunkName: "destination-details" */ "../views/NotFound.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
