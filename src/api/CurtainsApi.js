import axiosClient from "./axiosClient";

const CurtainsApi = {
  turnOnCurtains: () => {
    return axiosClient.post("/Curtains", {
      isOn: true,
    });
  },
  turnOffCurtains: () => {
    return axiosClient.post("/Curtains", {
      isOn: false,
    });
  },
};

export default CurtainsApi;
