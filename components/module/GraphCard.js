import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

function GraphCard() {
  const data = [
    {
      name: "Sun",
      Income: 4000,
      Expense: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      Income: 3000,
      Expense: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      Income: 2000,
      Expense: 9800,
      amt: 2290,
    },
    {
      name: "Wed",
      Income: 2780,
      Expense: 3908,
      amt: 2000,
    },
    {
      name: "Thu",
      Income: 1890,
      Expense: 4800,
      amt: 2181,
    },
    {
      name: "Fri",
      Income: 2390,
      Expense: 3800,
      amt: 2500,
    },
    {
      name: "Sat",
      Income: 3490,
      Expense: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="d-none d-lg-block">
      <div className="h-100 card shadow border-0">
        <div className="card-body">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="text-muted">
                <h5 className="m-0"></h5>
                <p className="m-0">Income</p>
                <h5 className="font-weight-bold">Rp2.120.000</h5>
              </div>
              <div className="text-muted">
                <h5 className="m-0"></h5>
                <p className="m-0">Expense</p>
                <h5 className="font-weight-bold">Rp1.560.000</h5>
              </div>
            </div>
            <div className="w-100 text-center">
              <ResponsiveContainer width="100%" height={255}>
                <BarChart width={150} height={300} data={data}>
                  <Bar dataKey="Expense" fill="#6379f4" minPointSize={5}></Bar>
                  <Bar dataKey="Income" fill="#a4a7b4" minPointSize={10} />
                  <XAxis dataKey="name" />
                  <Tooltip cursor={{ fill: "rgba(206, 206, 206, 0.2)" }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            div.card {
              border-radius: 15px;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default GraphCard;
