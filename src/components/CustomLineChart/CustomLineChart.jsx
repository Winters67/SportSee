import React from 'react';
import "../CustomLineChart/CustomLineChart.scss"
import { LineChart, Line, Tooltip, XAxis } from 'recharts';
import CustomTooltip from './CustomTooltip';

const CustomLineChart = ({ data }) => {

    const daysOfTheWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

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
                <XAxis dataKey="" tickFormatter={(tickItem) => daysOfTheWeek[tickItem]} axisLine={false} stroke="#FFFFFF" />

                <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />

                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFFFFF"
                    activeDot={{ r: 3 }}
                    dot={false}
                />
            </LineChart>

        </div>
    );
}

export default CustomLineChart;
