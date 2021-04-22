import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://4c9f253b2eac.ngrok.io/api",
});

export default axiosClient;
