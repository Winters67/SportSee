import React from 'react';
import "../CustomBarChart/CustomBarChart.scss"
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Text } from 'recharts';

const CustomBarChart = ({ data }) => {
  return (
    <div className='CustomBar'>
      <BarChart width={730} height={250} data={data.sessions}>
       
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
        <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
        <Text>Activité quotidienne</Text>
      </BarChart>
    </div>
  );
};

export default CustomBarChart;