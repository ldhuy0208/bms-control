import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://24d66a067347.ngrok.io/api",
});

export default axiosClient;
