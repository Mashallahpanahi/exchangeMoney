


// // components/RevenueChart.tsx
// 'use client';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const revenueData = [
//     { month: 'Jan', revenue: 42000 },
//     { month: 'Feb', revenue: 38000 },
//     { month: 'Mar', revenue: 35000 },
//     { month: 'Apr', revenue: 45000 },
//     { month: 'May', revenue: 52000 },
//     { month: 'Jun', revenue: 48000 },
//     { month: 'Jul', revenue: 62000 },
//     { month: 'Aug', revenue: 58000 },
//     { month: 'Sep', revenue: 71000 },
//     { month: 'Oct', revenue: 68000 },
//     { month: 'Nov', revenue: 82000 },
//     { month: 'Dec', revenue: 124563 },
// ];

// const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
//                 <p className="text-gray-600 font-medium">{label}</p>
//                 <p className="text-blue-600 font-semibold">
//                     ${payload[0].value.toLocaleString()}
//                 </p>
//             </div>
//         );
//     }
//     return null;
// };

// export default function LinerRevenueChart() {
//     return (
//         <div className="bg-white rounded-xl border border-gray-200 p-6">
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
//                 <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
//                     <p className="text-sm text-gray-500 mt-1">Moving / revenue and expenses</p>
//                 </div>
//                 <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
//                     <span className="text-green-600 font-semibold">+18.3%</span>
//                     <span className="text-gray-500 text-sm">+1 last month</span>
//                 </div>
//             </div>

//             {/* Chart */}
//             <div className="h-40">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                         data={revenueData}
//                         margin={{
//                             top: 5,
//                             right: 30,
//                             left: 20,
//                             bottom: 5,
//                         }}
//                     >
//                         <CartesianGrid
//                             strokeDasharray="3 3"
//                             vertical={false}
//                             stroke="#f3f4f6"
//                         />
//                         <XAxis
//                             dataKey="month"
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#6b7280', fontSize: 12, fontFamily: 'system-ui' }}
//                             padding={{ left: 10, right: 10 }}
//                         />
//                         <YAxis
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#6b7280', fontSize: 12, fontFamily: 'system-ui' }}
//                             tickFormatter={(value) => `${value / 1000}k`}
//                             width={40}
//                         />
//                         <Tooltip content={<CustomTooltip />} />
//                         <Line
//                             type="monotone"
//                             dataKey="revenue"
//                             stroke="#4f46e5"
//                             strokeWidth={3}
//                             dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }}
//                             activeDot={{ r: 6, fill: '#4f46e5', stroke: '#fff', strokeWidth: 2 }}
//                         />
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* Stats Summary */}
//             <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-100">
//                 <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
//                     <span className="text-sm text-gray-600">Revenue Trend</span>
//                 </div>
//                 <div className="text-sm text-gray-500">
//                     Last updated: Today
//                 </div>
//             </div>
//         </div>
//     );
// }
