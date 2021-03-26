import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import injector from "vue-inject";
import App from "./App.vue";
import router from "./router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.use(VueSidebarMenu);

Vue.config.productionTip = false;

Vue.use(injector);
require("./bootstrap");

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCDeMIo1gXKSgrcAtq6ams9VaOSQ1GnEcU",
    libraries: "places,drawing,visualization",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
