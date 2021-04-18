import React, { useEffect, useState } from "react";
import axiosClient from "./api/axiosClient";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timmer = setInterval(() => {
      axiosClient
        .get("/ElectricMeter")
        .then((response) => setData(response.data))
        .catch(console.log);
    }, 500);

    return () => {
      clearInterval(timmer);
    };
  }, []);

  return (
    <div>
      <div>Tần số: {data[0]?.point_value}</div>
      <div>Điện áp pha: {data[1]?.point_value}</div>
      <div>Điện áp trung bình: {data[2]?.point_value}</div>
      <div>Công suất biểu kiến: {data[3]?.point_value}</div>
      <div>Hệ sống công suất PF: {data[4]?.point_value}</div>
      <div>Dòng điện pha: {data[5]?.point_value}</div>
      <div>Công suất tiêu thụ: {data[8]?.point_value}</div>
    </div>
  );
}

export default App;
