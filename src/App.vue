<template>
  <div id="app">
    <google-map :GeoJson="this.ff" />
    <!-- {{ff}} -->
    <upload-excel />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue";
import UploadExcel from "./components/UploadExcel.vue";

export default {
  name: "App",
  dependencies: ["geoService"],
  components: {
    GoogleMap,
    UploadExcel,
  },
  data() {
    return {
      ff: {},
    };
  },
  async created() {
    this.ff = await this.getdata();
  },
  methods: {
    async getdata() {
      const { data } = await this.geoService.getData1();
      return data[0];
    },
  },
};
</script>
