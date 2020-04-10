import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/films",
    name: "Films",
    component: () =>
      import("../views/Films.vue")
  },
  {
    path: "/tvchannels",
    name: "TVChannels",
    component: () =>
      import("../views/TVChannels.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
