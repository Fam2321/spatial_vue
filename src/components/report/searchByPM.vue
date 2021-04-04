<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="pm"
            label="PM2.5"
            type="number"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            v-model="year"
            :items="yearlist"
            label="Year"
            required
            outlined
          ></v-select>
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
  </v-form>
</template>

<script>
export default {
  name: "searchByPM",
  dependencies: ["excelService", "reportService"],
  data: () => ({
    valid: false,
    pm: "",
    year: "",
    yearlist: ["2015", "2016"],
    dada: [],
  }),
  methods: {
    async downloadButton() {
      await this.excelService
        .downloadExcelByPM(this.pm, this.year)
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "ListOfCountry.xlsx");
          document.body.appendChild(link);
          link.click();
        });
    },
    async searchButton() {
      await this.reportService
        .getReportByPM(this.pm, this.year)
        .then((response) => {
          this.dada = response.data;
        });
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
