import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://6a7fddf826a2.ngrok.io/api",
});

export default axiosClient;
