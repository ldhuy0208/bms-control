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
      <div>Tần số: {data[34]?.point_value}</div>
      <div>Điện áp pha: {data[32]?.point_value}</div>
      <div>Điện áp tiêu thụ: {data[36]?.point_value}</div>
      <div>Hệ sống công suất PF: {data[35]?.point_value}</div>
      <div>Dòng điện pha: {data[33]?.point_value}</div>
      <div>Cài đặt giá trị Lux: {data[21]?.point_value}</div>
      <div>Giá trị CBAS1: {data[23]?.point_value}</div>
      <div>Giá trị CBAS2: {data[24]?.point_value}</div>
      <div>Lux hiện tại: {data[22]?.point_value}</div>
      <div>Nhiệt độ điều khiển quạt: {data[16]?.point_value}</div>
      <div>Nhiệt độ điều khiển sò: {data[17]?.point_value}</div>
      <div>Độ ẩm hiện tại: {data[7]?.point_value}</div>
      <div>Nhiệt độ hiện tại: {data[6]?.point_value}</div>
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
