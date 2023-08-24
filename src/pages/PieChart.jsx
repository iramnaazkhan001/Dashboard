import React from "react";
import { Chart } from "react-google-charts";
import { Card } from "react-bootstrap";
import Table from "./Tables";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};
export const optionss = {
  title: "Sticks, default",
  curveType: "function",
  series: [{ color: "#E7711B" }],
  intervals: { style: "area" },
  legend: "none",
};
export const data1 = [
  ["Drinks", "Hours per Day"],
  ["Beer", 11],
  ["Cosmopolitan", 2],
  ["Martini", 2],
  ["Margarita", 2],
  ["Mojito", 7],
];

export const options1 = {
  title: "My Daily Activities",
};
 function Pie() {
  return (
   <div style={{display:"flex" , marginLeft:'170px',gap:'30px'}}>
   <Card style={{ width: '20rem', height:'170px', marginLeft:'90px' }}>
<Card.Body> 
<Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"90%"}
      height={"140px"}
    />
</Card.Body>
</Card>
<Table/>

</div>
  );
}
export default Pie;
