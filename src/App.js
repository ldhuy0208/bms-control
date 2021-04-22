import React, { useEffect, useState } from "react";
import axiosClient from "./api/axiosClient";
import CurtainsApi from "./api/CurtainsApi";
import LampApi from "./api/LampApi";
import pressurizedFanApi from "./api/pressurizedFanApi";

function App() {
  const [data, setData] = useState([]);

  const updateData = () => {
    axiosClient
      .get("/ElectricMeter")
      .then((response) => setData(response.data))
      .catch(console.log);
  };

  useEffect(() => {
    updateData();
    const timmer = setInterval(updateData, 10000);
    return () => {
      clearInterval(timmer);
    };
  }, []);

  const turnOnPressurizedFan = () => {
    pressurizedFanApi.turnOnPressurizedFan();
  };
  const turnOffPressurizedFan = () => {
    pressurizedFanApi.turnOffPressurizedFan();
  };


  const turnOnLamp = () => {
    LampApi.turnOnLamp();
  };
  const turnOffLamp = () => {
    LampApi.turnOffLamp();
  };


  const turnOnCurtains = () => {
  CurtainsApi.turnOnCurtains();
  };
  const turnOffCurtains = () => {
    CurtainsApi.turnOffCurtains();
  };





  return (
    <div>
      <div>Tần số: {data[0]?.point_value}</div>
      <div>Điện áp pha: {data[1]?.point_value}</div>
      <div>Điện áp trung bình: {data[2]?.point_value}</div>
      <div>Công suất biểu kiến: {data[3]?.point_value}</div>
      <div>Hệ sống công suất PF: {data[4]?.point_value}</div>
      <div>Dòng điện pha: {data[5]?.point_value}</div>
      <div>Công suất tiêu thụ: {data[8]?.point_value}</div>
      <button onClick={turnOnPressurizedFan}>Bat quat dieu ap</button>
      <button onClick={turnOffPressurizedFan}>
        Tat quat dieu app quat dieu ap
      </button>
      <button onClick={turnOnLamp}>Bat Den</button>
      <button onClick={turnOffLamp}>Tat Den</button>
      <button onClick={turnOnCurtains}>Keo rem xuong</button>
      <button onClick={turnOffCurtains}>Keo rem len</button>
    </div>
  );
}

export default App;
