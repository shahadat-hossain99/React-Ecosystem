import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Asif", physics: 85, chemistry: 78, biology: 92, math: 88 },
  { id: 2, name: "Maria", physics: 92, chemistry: 85, biology: 88, math: 95 },
  { id: 3, name: "Rahat", physics: 64, chemistry: 70, biology: 75, math: 68 },
  { id: 4, name: "Tanzila", physics: 78, chemistry: 80, biology: 85, math: 82 },
  {
    id: 5,
    name: "Shahadat",
    physics: 88,
    chemistry: 82,
    biology: 90,
    math: 91,
  },
  { id: 6, name: "Nusrat", physics: 75, chemistry: 88, biology: 82, math: 80 },
  { id: 7, name: "Fahim", physics: 95, chemistry: 92, biology: 96, math: 99 },
  { id: 8, name: "Sadia", physics: 70, chemistry: 65, biology: 72, math: 75 },
  { id: 9, name: "Imran", physics: 82, chemistry: 76, biology: 80, math: 84 },
  { id: 10, name: "Jui", physics: 89, chemistry: 91, biology: 87, math: 93 },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={1000} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"chemistry"}></Line>
        <Line dataKey={"Physics"}></Line>
        <Line dataKey={"biology"}></Line>
        {/* <Line dataKey={"biology"}></Line> */}
      </LineChart>
    </div>
  );
};

export default ResultsChart;
