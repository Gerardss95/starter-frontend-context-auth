import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000/",
      withCredentials: true,
    });
  }

  login(body) {
    return this.apiClient.post("/login", body);
  }

  whoami() {
    return this.apiClient.get("/whoami");
  }

  getAllResorts() {
    return this.apiClient.get("/resorts");
  }

  createResort(body) {
    return this.apiClient.post("/resorts", body);
  }

  deleteResort(id) {
    return this.apiClient.delete(`/resorts/${id}`);
  }
}

const apiClient = new ApiClient();
export default apiClient;
