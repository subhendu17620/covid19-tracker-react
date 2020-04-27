import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

function Chart() {
  const [dailyDate, setDailyDate] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = <Line data={{ labels: "", datasets: [{}, {}] }} />;

  return <h1>Chart</h1>;
}

export default Chart;
