import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://98dfca48cf02.ngrok.io" + "/api",
});

export default axiosClient;
