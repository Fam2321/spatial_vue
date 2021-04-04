import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/visaul",
    name: "Visaul",
    component: () => import("../views/VisaulPage.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/UploadPage.vue"),
  },
  {
    path: "/",
    name: "Report",
    component: () => import("../views/ReportPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
