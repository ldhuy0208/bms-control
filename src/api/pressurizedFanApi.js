import axiosClient from "./axiosClient";

const pressurizedFanApi = {
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

export default pressurizedFanApi;
