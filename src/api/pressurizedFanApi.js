import axiosClient from "./axiosClient";

export default {
  turnOnPressurizedFan: () => {
    return axiosClient.post("/PressurizedFan", {
      isOn: true,
    });
  },
  turnOffPressurizedFan: () => {
    return axiosClient.post("/PressurizedFan", {
      isOn: false,
    });
  },
};
