import React from 'react';
import { PieChart, Pie, Cell  } from 'recharts';
import "./CustomPieChart.scss"

const CustomPieChart = ({ data }) => {
  const percentData = data * 100; // transformer les données en pourcentage
  const chartData = [{ name: 'Value', value: percentData }, { name: 'invert', value: 100 - percentData }];

  return (
    <div style={{ position: 'relative', width: 258, height: 263 }}>
<div className='chartLabel'>Score</div>
      <PieChart className='CustomPie' width={258} height={263}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          startAngle={90} // commencer à midi
          endAngle={360 + 90} // utiliser l'angle de fin calculé
          innerRadius="0%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          <Cell key={`cell-0`} fill="#FFFFFF" />
          <Cell key={`cell-1`} fill="#FFFFFF" />
        </Pie>
        <Pie
          data={[{ name: 'Value', value: percentData }]}
          cx="50%"
          cy="50%"
          startAngle={90} // commencer à midi
          endAngle={360 * (percentData / 100) + 90} // utiliser l'angle de fin calculé
          innerRadius="70%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          <Cell key={`cell-2`} fill="#FF0000" />
        
        </Pie>
      </PieChart>
      <div className='textCenter'>
        <span className='percent'>
          {`${percentData}%`}
        </span>
        <span className='textPercent'>
          {`de votre objectif`}
        </span>
      </div>
    </div>
  );
};

export default CustomPieChart;
