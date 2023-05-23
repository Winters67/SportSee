import React from 'react';
import "../CustomLineChart/CustomLineChart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CustomTooltip from './CustomTooltip';

const CustomLineChart = ({ data }) => {

    if (!data || !data.sessions) {
        return <div>Chargement...</div>;
    }

  

    return (
        <div>

            <LineChart
                width={258}
                height={263}
                data={data.sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFFFFF"
                    activeDot={{ r: 8 }}
                />
            </LineChart>

        </div>
    );
}

export default CustomLineChart;
