<template>
  <div id="upload" style="margin: 3%">
    <upload-excel />
  </div>
</template>

<script>
import UploadExcel from "../components/UploadExcel";

export default {
  name: "UploadPage",
  components: {
    UploadExcel,
  },
};
</script>
