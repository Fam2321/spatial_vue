<template>
  <div>
    <GmapMap
      id = this.id
      ref="mapRef"
      :center="center"
      :zoom="4"
      style="width: 100%; height: 400px"
    />
    <!-- {{this.aaa()}} -->
    {{GeoJson}}
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  dependencies: ["geoService"],
  props: {
    GeoJson: {},
  },
  data() {
    return {
      center: { lat: -28, lng: 137 },
      ff : {},
      id : 1,
    };
  },
  async mounted(){
    // console.log(this.GeoJson);
    const dd = await this.getdata()
    const dada = {
      type : "FeatureCollection",
      features : [
        {
          type : "Feature",
          geometry : dd.geometry
        }
      ]
    }
        console.log(dada);
    this.$refs.mapRef.$mapPromise.then((map) => {
        map.data.addGeoJson(
          dada
          // "https://storage.googleapis.com/mapsdevsite/json/google.json"
        );
      }); 
  },
  methods:{
    async getdata() {
      const {data} = await this.geoService.getData1();
      return data[0]
    },
  },
  // watch: {
  //   ff() {
  //     this.id = this.id+1
  //     console.log(JSON.parse(this.GeoJson),"hi");
  //     this.$refs.mapRef.$mapPromise.then((map) => {
  //       map.data.loadGeoJson(

  //       );
  //     }); 
  //   }
  // },
};
</script>
