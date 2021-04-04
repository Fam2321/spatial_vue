<template>
  <v-app>
    <div id="app">
      <sidebar-menu :menu="menu" :theme="theme" :hideToggle="hideToggle" />
      <router-view style="padding-left: 350px" />
    </div>
  </v-app>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
export default {
  name: "App",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      separator: {
        template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`,
      },
      menu: [
        {
          header: true,
          title: "Spatial And GIS",
        },
        {
          href: "/visaul",
          title: "Visual",
          icon: "mdi-view-dashboard",
        },
        {
          href: "/",
          title: "Report",
          icon: "fa fa-user",
        },
        {
          href: "/upload",
          title: "Upload",
          icon: "fa fa-chart-area",
        },
      ],
      hideToggle: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
