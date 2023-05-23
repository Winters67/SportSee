import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const CustomPieChart = ({ data }) => {
  const percentData = data * 100; // transformer les données en pourcentage
  const chartData = [{ name: 'Value', value: percentData }];
  console.log(percentData)

  const endAngle = -360 * (percentData / 100); // calculer l'angle de fin en fonction de percentData

  return (
    <PieChart width={258} height={263}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        startAngle={90} // commencer à midi
        endAngle={endAngle} // utiliser l'angle de fin calculé
        innerRadius="70%"
        outerRadius="90%"
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        <Cell key={`cell-0`} fill="#FF0000" /> {/* Utilisez la couleur rouge pour la Cell */}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
