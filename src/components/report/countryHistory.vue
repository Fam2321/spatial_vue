<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-autocomplete
          v-model="value"
          :items="items"
          auto-select-first
          clearable
          outlined
          label="Country"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn color="primary" @click="searchButton"> Search </v-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn color="normal" @click="downloadButton"> Download </v-btn>
      </v-col>
    </v-row>
    {{ dada }}
  </v-container>
</template>

<script>
export default {
  name: "countryHistory",
  dependencies: ["excelService", "reportService"],
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    value: null,
    dada: [],
  }),
  methods: {
    async getCountry() {
      var res = await this.reportService.getDistinctCountry();
      this.items = res.data;
    },
    async searchButton() {
      await this.reportService
        .getHistoryByCountry(this.value)
        .then((response) => {
          this.dada = response.data;
        });
    },
    async downloadButton() {
      await this.excelService
        .downloadHisByCountry(this.value)
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "HistoryOfCountry.xlsx");
          document.body.appendChild(link);
          link.click();
        });
    },
  },
  async mounted() {
    await this.getCountry();
  },
};
</script>
