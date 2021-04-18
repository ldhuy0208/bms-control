import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://f0b178f9b4dd.ngrok.io/api",
});

export default axiosClient;
