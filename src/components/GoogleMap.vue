<template>
  <div>
    <GmapMap
      id="this.id"
      ref="mapRef"
      :center="center"
      :zoom="4"
      style="width: 100%; height: 400px"
    />
    {{ GeoJson }}
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
      ff: {},
      id: 1,
    };
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.data.addGeoJson(
        "https://storage.googleapis.com/mapsdevsite/json/google.json"
      );
    });
  },
};
</script>
