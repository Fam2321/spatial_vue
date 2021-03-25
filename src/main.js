import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import injector from "vue-inject";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(injector);
require("./bootstrap");

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places,drawing,visualization",
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
