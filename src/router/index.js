import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Upload",
    component: () => import("../views/UploadPage.vue"),
  },
  {
    path: "/visaul",
    name: "Visaul",
    component: () => import("../views/VisaulPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
