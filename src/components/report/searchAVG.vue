<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
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
    dada: [],
  }),
  methods: {
    async downloadButton() {
      await this.excelService.downloadExcelAVG().then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "AveragePMByCountry.xlsx");
        document.body.appendChild(link);
        link.click();
      });
    },
    async searchButton() {
      await this.reportService.getReportAVG().then((response) => {
        this.dada = response.data;
      });
    },
  },
};
</script>
