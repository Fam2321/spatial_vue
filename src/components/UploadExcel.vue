<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <v-row no-gutters justify="center" align="center">
        <v-col cols="12" sm="12">
          <h1>Upload</h1>
          <br />
        </v-col>
        <v-col cols="8">
          <v-file-input
            show-size
            label="File input"
            @change="onChangeFileUpload"
          ></v-file-input>
        </v-col>

        <v-col cols="4">
          <v-btn color="success" dark small @click="submitForm">
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script>
export default {
  dependencies: ["reportService"],
  data() {
    return {
      file: "",
      overlay: false,
    };
  },

  methods: {
    async submitForm() {
      this.overlay = true;
      let formData = new FormData();
      formData.append("file", this.file);
      var res = await this.reportService.uploadExcelFile(formData);
      alert(res.data.message);
      this.overlay = false;
    },

    onChangeFileUpload(file) {
      this.file = file;
    },
  },
};
</script>
