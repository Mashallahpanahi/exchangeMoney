
'use client';

import axios from 'axios';
import { error } from 'console';
import { cache, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function CircleChart() {
    const [dolar, setDolar] = useState(0)
    const [afghani, setAfghani] = useState(0)
    const [toman, setToman] = useState(0)
    const [kaldar, setKaldar] = useState(0);

    useEffect(() => {
        try {
            const fetching = async () => {
                const res = await axios.get("http://localhost:8000/api/allTotalCash")
                const result = res.data
                if (!res) throw new Error("faild to fatching allTotalCash")
                setDolar(Number(result.dolar));
                setAfghani(Number(result.afghani));
                setToman(Number(result.toman));
                setKaldar(Number(result.kaldar));
            }
            fetching()
        } catch (error) {
            console.error(error)
        }
    }, [])


    const total = dolar + afghani + toman + kaldar;


    const salesData = [
        { name: '$ Dollar', value: dolar, percentage: total > 0 ? (dolar / total * 100) : 0, color: ' #16a34a' },
        { name: 'Afghani', value: afghani, percentage: total > 0 ? (afghani / total * 100) : 0, color: '#f97316' },
        { name: 'Toman', value: toman, percentage: total > 0 ? (toman / total * 100) : 0, color: '#2563eb' },
        { name: 'PKR', value: kaldar, percentage: total > 0 ? (kaldar / total * 100) : 0, color: '#fde047' },
    ];

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                    <p className="font-medium text-gray-900">{payload[0].payload.name}</p>
                    <p className="text-gray-600">مقدار: {payload[0].payload.value}</p>
                    <p className="text-gray-600">درصد: {payload[0].payload.percentage.toFixed(1)}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-md border border-gray-200 p-6 sm:w-full md:w-[500px] lg:w-[700px]  h-[400px]">
            {/* Header */}
            <div className=' bg-blue-600'></div>
            <div className='bg-[#fdd78c]'></div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 -pl-4 -mt-4">Total <span className='text-green-600 font-bold'>Cash</span></h3>
            </div>

            {/* Chart */}
            <div className="h-40 ">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={salesData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {salesData.map((entry, index) => (
                                <Cell key={`cell - ${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                            wrapperStyle={{
                                paddingLeft: '20px',
                                fontSize: '12px'
                            }}
                            formatter={(value, entry: any) => (
                                <span style={{ color: '#666', fontSize: '12px' }}>
                                    {value}
                                </span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Category List */}
            <div className="mt-6 space-y-3">
                {salesData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm text-gray-600">{item.name}</span>
                            <span className='font-semibold'>{item.value}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.percentage.toFixed(1)}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
















