import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/user";

class DataService {
  getGeoInfo(IP) {
    return axios
      .get(`${API_URL}/${IP}/getGeoInfo`, { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
 
}
export default new DataService();