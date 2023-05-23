import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CustomRadarChart = (data) => {

    const values = data.data.data.map(item => ({
        value: item.value,
        kind: data.data.kind[item.kind]
      }));



    return (
        
        <RadarChart width={258}
            height={263}
            cx="50%" cy="50%" outerRadius="80%" data={values}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      
    );
};

export default CustomRadarChart;
