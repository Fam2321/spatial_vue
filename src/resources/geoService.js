import HttpRequest from "./http_request";
import injector from "vue-inject";

class GeoService extends HttpRequest {
  getData1() {
    return this.get("/visual/find", {});
  }
}

injector.service("geoService", GeoService);
export default GeoService;
