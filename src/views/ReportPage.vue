<template>
  <div id="report" style="margin: 3%">
    <v-tabs v-model="tabs">
      <v-tab> PM25 </v-tab>
      <v-tab> Average </v-tab>
      <v-tab> History </v-tab>
      <v-tab> Population </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <br />
            <h1>hi</h1>
          </v-card-text>
          <SearchByPM />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <br />
            <h1>hi2</h1>
          </v-card-text>
          <SearchAVG />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <br />
            <h1>hi3</h1>
          </v-card-text>
          <CountryHistory />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <br />
            <h1>hi3</h1>
          </v-card-text>
          <Population />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SearchByPM from "../components/report/searchByPM.vue";
import CountryHistory from "../components/report/countryHistory.vue";
import SearchAVG from "../components/report/searchAVG.vue";
import Population from "../components/report/population.vue";

export default {
  components: { SearchByPM, CountryHistory, SearchAVG, Population },
  name: "ReportPage",
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
