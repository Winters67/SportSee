import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./CustomRadarChart.scss"

const CustomRadarChart = (data) => {

    const values = data.data.data.map(item => ({
        value: item.value,
        kind: data.data.kind[item.kind]
    }));



    return (

        <RadarChart className='CustomRadar' width={258}
            height={263}
            cx="50%" cy="50%" outerRadius="60%" data={values}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="kind" tick={{ fontSize: '12px', fill: '#ffffff' }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>

    );
};

export default CustomRadarChart;
