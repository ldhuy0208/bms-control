import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://05bedba55198.ngrok.io/api",
});

export default axiosClient;
