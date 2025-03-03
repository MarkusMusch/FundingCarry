import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { ApiResponse, ChartData, Series } from "../../types/chartTypes";

const CustomLineChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [dataKey, setDataKey] = useState<string>("date");
    const [series, setSeries] = useState<Series[]>([]);

    useEffect(() => {
        axios.get<ApiResponse>("http://127.0.0.1:8000/chart")
            .then((response) => {
                setChartData(response.data.data);
                setDataKey(response.data.dataKey);
                setSeries(response.data.series);
            })
            .catch((err) => {
                console.error("Axios Error:", err);
            });
    }, []);

    return (
        <ResponsiveContainer
            width="100%" 
            height={300}
        >
                <LineChart
                    data={chartData}
                    margin={{ top: 10, right: 50, left: 50, bottom: 50 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                    {series.map((s) => (
                        <Line
                            key={s.name}
                            type="monotone"
                            dataKey={s.name}
                            stroke={s.color}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;
