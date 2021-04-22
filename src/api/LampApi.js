import axiosClient from "./axiosClient";

const LampApi = {
  turnOnLamp: () => {
    return axiosClient.post("/Lamp", {
      isOn: true,
    });
  },
  turnOffLamp: () => {
    return axiosClient.post("/Lamp", {
      isOn: false,
    });
  },
};

export default LampApi;
