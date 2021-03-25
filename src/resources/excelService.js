import HttpRequest from "./http_request";
import injector from "vue-inject";

class ExcelService extends HttpRequest {
  uploadExcelFile(data) {
    return this.post("/excel/upload", data);
  }
}

injector.service("excelService", ExcelService);
export default ExcelService;
