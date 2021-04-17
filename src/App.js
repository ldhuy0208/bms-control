import React, { useEffect, useState } from "react";
import axiosClient from "./api/axiosClient";

function App() {
  const [dien, setDien] = useState(null);
  useEffect(() => {
    axiosClient
      .get("/dongho")
      .then((response) => setDien(response.data.value))
      .catch(console.log);
  }, []);
  return <div>Gia tri dien: {dien}</div>;
}

export default App;
