import HttpRequest from "./http_request";
import injector from "vue-inject";

class ReportService extends HttpRequest {
  uploadExcelFile(data) {
    return this.post("/excel/upload", data);
  }
  getDistinctYear() {
    return this.get("/excel/distinctYear");
  }
  getReportByPM(value, year) {
    return this.get("/excel/findByPM", {
      value: value,
      year: year,
    });
  }
  getReportAVG() {
    return this.get("/excel/findAvg");
  }
  getDistinctCountry() {
    return this.get("/excel/distinctCountry");
  }
  getHistoryByCountry(country) {
    return this.get("/excel/findHistory", {
      country: country,
    });
  }
  getDistinctColor() {
    return this.get("/excel/distinctColor");
  }
  getPopByColorAndYear(color, year) {
    return this.get("/excel/findPop", {
      color: color,
      year: year,
    });
  }
}

injector.service("reportService", ReportService);
export default ReportService;
