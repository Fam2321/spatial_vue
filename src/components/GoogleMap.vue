<template>
  <div>
    <v-card flat>
      <GmapMap :center="center" :zoom="zoom" style="width: 100%; height: 920px">
        <gmap-polygon :paths="outerCoords"></gmap-polygon>
        <GmapMarker
          :key="index"
          ref="mapRef"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="false"
          :draggable="false"
          @click="center = m.position"
        />
      </GmapMap>
      <v-card width="360">
        <v-navigation-drawer
          right
          fixed
          width="350"
          height="50%"
          style="background: rgba(0, 0, 0, 0)"
          floating
        >
          <v-card class="mx-auto" max-width="350" height="200px">
            <v-list dense rounded>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="no1 = true"
                  :disabled="overlay"
                >
                  The city that had in year
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="setMarkerNo2"
                  :disabled="overlay"
                >
                  50 closest city to Bangkok
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="no2 = true"
                  :disabled="overlay"
                >
                  city of Thailand’s neighboring
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="no4 = true"
                  :disabled="overlay"
                >
                  MBR in Thailand
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="condition = false"
                  :disabled="overlay"
                >
                  highest no. of city points
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  text
                  color="teal accent-4"
                  @click="condition = false"
                  :disabled="overlay"
                >
                  city has low income
                </v-btn>
              </v-list-item>
            </v-list>

            <v-expand-transition>
              <v-card
                v-if="no1"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; padding: 10px"
              >
                <v-card-actions class="pt-0">
                  <v-select
                    v-model="year"
                    :items="yearlist"
                    label="Year"
                    required
                  ></v-select>
                </v-card-actions>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="no1 = false">
                    Close
                  </v-btn>
                  <v-btn color="normal" @click="setMarkerNo1" right>
                    Mark
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card
                v-if="no2"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; padding: 10px"
              >
                <v-card-actions class="pt-0">
                  <v-select
                    v-model="year"
                    :items="yearlist"
                    label="Year"
                    required
                  ></v-select>
                </v-card-actions>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="no2 = false">
                    Close
                  </v-btn>
                  <v-btn color="normal" @click="setMarkerNo3" right>
                    Mark
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card
                v-if="no4"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%; padding: 10px"
              >
                <v-card-actions class="pt-0">
                  <v-select
                    v-model="year"
                    :items="yearlist"
                    label="Year"
                    required
                  ></v-select>
                </v-card-actions>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="no4 = false">
                    Close
                  </v-btn>
                  <v-btn color="normal" @click="setMarkerNo4" right>
                    Mark
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-navigation-drawer>
      </v-card>
    </v-card>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  dependencies: ["geoService", "reportService"],
  data() {
    return {
      center: { lat: 17.56, lng: -3.77 },
      zoom: 3,
      overlay: false,
      markers: [],
      no1: false,
      no2: false,
      no4: false,
      year: "",
      yearlist: ["2015", "2016"],
      outerCoords: [],
    };
  },
  methods: {
    async setMarkerNo1() {
      this.overlay = true;
      this.outerCoords = [];
      var res = await this.geoService.getCityPoint(this.year);
      this.markers = res.data;
      this.overlay = false;
    },
    async setMarkerNo2() {
      this.overlay = true;
      this.outerCoords = [];
      var res = await this.geoService.getClosetCity();
      this.center = { lat: 14.14075333490046, lng: 100.67704709412011 };
      this.zoom = 6;
      this.markers = res.data;
      this.overlay = false;
    },
    async setMarkerNo3() {
      this.overlay = true;
      this.outerCoords = [];
      var res = await this.geoService.getThaiNeighbor(this.year);
      this.center = { lat: 14.14075333490046, lng: 100.67704709412011 };
      this.zoom = 6;
      this.markers = res.data;
      this.overlay = false;
    },
    async setMarkerNo4() {
      this.overlay = true;
      this.markers = [];
      this.center = { lat: 14.14075333490046, lng: 100.67704709412011 };
      this.zoom = 6;
      var res = await this.geoService.getMBR(this.year);
      this.outerCoords = res.data;
      this.overlay = false;
    },
    async getYear() {
      var res = await this.reportService.getDistinctYear();
      this.yearlist = res.data;
    },
  },
  async mounted() {
    await this.getYear();
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
