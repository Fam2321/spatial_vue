<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <h1>Upload</h1>
      <label
        >File
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="onChangeFileUpload()"
        />
      </label>
      <button v-on:click="submitForm()">Upload</button>
    </div>
  </div>
</template>

<script>
export default {
  dependencies: ["excelService"],
  data() {
    return {
      file: "",
    };
  },

  methods: {
    async submitForm() {
      let formData = new FormData();
      formData.append("file", this.file);

      await this.excelService.uploadExcelFile(formData);
    },

    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>
