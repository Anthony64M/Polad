import React from 'react'
import './Chart.css';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
          name: "Jan",
          "Active Tweets": 500,
        },
        {
          name: 'Feb',
          "Active Tweets": 3000,
        },
        {
          name: 'March',
          "Active Tweets": 2000,
        },
        {
          name: 'April',
          "Active Tweets": 2780,
        },
        {
          name: 'May',
          "Active Tweets": 1890,
        },
        {
          name: 'June',
          "Active Tweets": 2390,
        },
        {
          name: 'July',
          "Active Tweets": 3490,
        },
        {
          name: 'Aug',
          "Active Tweets": 490,
        },
        {
          name: 'Sept',
          "Active Tweets": 90,
        },
        {
          name: 'Oct',
          "Active Tweets": 1490,
        },
        {
          name: 'Nov',
          "Active Tweets": 2490,
        },
        {
          name: 'Dec',
          "Active Tweets": 790,
        },
    ];
    return (
        <div className="chart">
            <h3 className="chartTitle">Today's Tweets</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active Tweets" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid  stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
 
export default Chart
