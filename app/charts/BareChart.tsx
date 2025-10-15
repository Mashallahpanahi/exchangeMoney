'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { branchType } from '../dashboard/branches/manageBranch/page';





export default function BareChart() {

    interface BareChartType {
        "1": number,
        "2": number,
        "3": number,
        "4": number,
        "5": number,
        "6": number,
        "7": number,
        "8": number,
        "9": number,
        "10": number,
        "11": number,
        "12": number,

    }



    const [m1, setM1] = useState<number>(0)
    const [m2, setM2] = useState<number>(0)
    const [m3, setM3] = useState<number>(0)
    const [m4, setM4] = useState<number>(0)
    const [m5, setM5] = useState<number>(0)
    const [m6, setM6] = useState<number>(0)
    const [m7, setM7] = useState<number>(0)
    const [m8, setM8] = useState<number>(0)
    const [m9, setM9] = useState<number>(0)
    const [m10, setM10] = useState<number>(0)
    const [m11, setM11] = useState<number>(0)
    const [m12, setM12] = useState<number>(0)

    useEffect(() => {
        const getData = async () => {

            try {
                const res = await axios.get<BareChartType>("http://localhost:8000/api/getTotalIncome")
                const result: BareChartType = res.data

                setM1(result[1])
                setM2(result[2])
                setM3(result[3])
                setM4(result[4])
                setM5(result[5])
                setM6(result[6])
                setM7(result[7])
                setM8(result[8])
                setM9(result[9])
                setM10(result[10])
                setM11(result[11])
                setM12(result[12])

            } catch (error) {
                console.error(error)
            }


        }
        getData()
    }, [])


    const data = [
        { name: 'm1', uv: m1, },
        { name: 'm2', uv: m2, },
        { name: 'm3', uv: m3, },
        { name: 'm4', uv: m4, },
        { name: 'm5', uv: m5, },
        { name: 'm6', uv: m6, },
        { name: 'm7', uv: m7, },
        { name: 'm8', uv: m8, },
        { name: 'm9', uv: m9, },
        { name: 'm10', uv: m10, },
        { name: 'm11', uv: m11, },
        { name: 'm12', uv: m12, },
    ];

    //stutic value
    //   const data = [
    //     { name: 'm1', uv: 400, pv: 2400, amt: 2400 },
    //     { name: 'm2', uv: 300, pv: 2210, amt: 2290 },
    //     { name: 'm3', uv: 200, pv: 2290, amt: 2000 },
    //     { name: 'm4', uv: 278, pv: 2000, amt: 2181 },
    //     { name: 'm5', uv: 208, pv: 2000, amt: 2181 },
    //     { name: 'm6', uv: 300, pv: 2000, amt: 2181 },
    //     { name: 'm7', uv: 380, pv: 2000, amt: 2181 },
    //     { name: 'm8', uv: 200, pv: 2000, amt: 2181 },
    //     { name: 'm9', uv: 900, pv: 2000, amt: 2181 },
    //     { name: 'm10', uv: 30, pv: 2000, amt: 2181 },
    //     { name: 'm11', uv: 100, pv: 2000, amt: 2181 },
    //     { name: 'm12', uv: 400, pv: 2000, amt: 2181 },
    // ];


    return (
        <div className=" h-[400px]  bg-white rounded-md border border-gray-200  sm:w-full md:w-[700px] lg:w-full p-2">
            <h1 className="text-lg font-semibold text-gray-900  pl-4 flex" >
                <span><span className='text-naqibBlue font-bold'>Incomes</span> in this year</span>
            </h1>
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




