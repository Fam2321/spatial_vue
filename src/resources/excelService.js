import ExcelRequest from "./excel_request";
import injector from "vue-inject";

class ExcelService extends ExcelRequest {
  downloadExcelByPM(value, year) {
    return this.get("/excel/loadByPM", {
      value: value,
      year: year,
    });
  }
  downloadExcelAVG() {
    return this.get("/excel/loadAvg");
  }
  downloadHisByCountry(country) {
    return this.get("/excel/loadHis", {
      country: country,
    });
  }
  downloadExcelPopByColor(color, year) {
    return this.get("/excel/loadPop", {
      color: color,
      year: year,
    });
  }
}

injector.service("excelService", ExcelService);
export default ExcelService;
