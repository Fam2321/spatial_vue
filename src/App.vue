<template>
  <v-app>
    <div id="app">
      <sidebar-menu
        :menu="menu"
        :theme="theme"
        :hideToggle="hideToggle"
        :width="width"
      />
      <router-view style="padding-left: 250px" />
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
      menu: [
        {
          header: true,
          title: "Spatial And GIS",
        },
        {
          href: "/visaul",
          title: "Visual",
        },
        {
          href: "/",
          title: "Report",
        },
        {
          href: "/upload",
          title: "Upload",
        },
      ],
      hideToggle: true,
      width: "250px",
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
