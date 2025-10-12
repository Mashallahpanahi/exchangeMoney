'use client';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { name: 'm1', uv: 400, pv: 2400, amt: 2400 },
    { name: 'm2', uv: 300, pv: 2210, amt: 2290 },
    { name: 'm3', uv: 200, pv: 2290, amt: 2000 },
    { name: 'm4', uv: 278, pv: 2000, amt: 2181 },
    { name: 'm5', uv: 208, pv: 2000, amt: 2181 },
    { name: 'm6', uv: 300, pv: 2000, amt: 2181 },
    { name: 'm7', uv: 380, pv: 2000, amt: 2181 },
    { name: 'm8', uv: 200, pv: 2000, amt: 2181 },
    { name: 'm9', uv: 900, pv: 2000, amt: 2181 },
    { name: 'm10', uv: 30, pv: 2000, amt: 2181 },
    { name: 'm11', uv: 100, pv: 2000, amt: 2181 },
    { name: 'm12', uv: 400, pv: 2000, amt: 2181 },
];

export default function BareChart() {
    return (
        <div className=" h-[400px]  bg-white rounded-md border border-gray-200  sm:w-full md:w-[700px] lg:w-full p-2">
            <h1 className="text-lg font-semibold text-gray-900  pl-4 " ><span className='text-naqibBlue font-bold'>Incomes</span> in this year</h1>
            <ResponsiveContainer width="95%" height="100%">
                <BarChart data={data} className='p-4'>
                    <XAxis dataKey="name" stroke="#1C58DD" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#1C58DD' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
                    <Bar dataKey="uv" fill="#1C58DD" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}




