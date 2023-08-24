import React from "react";
import { Card } from "react-bootstrap";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export function Geo() {
    
  return (
    <div >
        <Card style={{width:'75%',marginLeft:'250px',height:'270px'}}>
        <Card.Body>
    <Chart
      chartType="Bar"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
    </Card.Body>
    </Card>
    </div>
  );
}
