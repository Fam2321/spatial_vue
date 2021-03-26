<template>
  <div id="app">
    <sidebar-menu :menu="menu" :theme="theme" :hideToggle="hideToggle" />
    <router-view style="padding-left: 350px" />
  </div>
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
          hiddenOnCollapse: true,
        },
        {
          href: "/visaul",
          title: "Visual",
          icon: "fa fa-user",
        },
        {
          href: "/",
          title: "Upload",
          icon: "fa fa-chart-area",
        },
      ],
      // Sidebar theme (available themes: 'white-theme')
      theme: "white-theme",
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
