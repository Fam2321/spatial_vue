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
  getThaiNeighbor(year) {
    return this.get("/visual/findNeighbor", {
      year: year,
    });
  }
  getMBR(year) {
    return this.get("/visual/findMBR", {
      year: year,
    });
  }
}

injector.service("geoService", GeoService);
export default GeoService;
