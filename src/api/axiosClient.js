import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://0c603f72c49d.ngrok.io/api",
});

export default axiosClient;
