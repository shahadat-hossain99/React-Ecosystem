import React from "react";
import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const markDataRes = use(marksPromise);
  const markData = markDataRes.data;

  console.log(markDataRes);
  console.log(markData);

  //   Data processing for the chart
  const marksChartData = markData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      math: studentData.marks.math,
      chemistry: studentData.marks.chemistry,
      biology: studentData.marks.biology,
    };

    const avg =
      (student.physics + student.chemistry + student.math + student.biology) /
      4;

    student.avg = avg;

    return student;
  });
  console.log(marksChartData);
  return (
    <div>
      <BarChart width={1000} height={400} data={marksChartData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"avg"} fill="yellow"></Bar>
        <Bar dataKey={"chemistry"} fill="skyBlue"></Bar>
        <Bar dataKey={"physics"} fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
