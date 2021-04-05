import HttpRequest from "./http_request";
import injector from "vue-inject";

class GeoService extends HttpRequest {
  getCityPoint(year) {
    return this.get("/visual/findCityByYear", {
      year: year,
    });
  }
  getClosetCity() {
    return this.get("/visual/findClosetCity");
  }
}

injector.service("geoService", GeoService);
export default GeoService;
