"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export interface branchType {
    id: number;
    branchName: string;
    branchManager: string;
    branchCity: string;
}

export default function ManageBranchPage() {
    const [branchData, setBranchData] = useState<branchType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<branchType[]>(
                    "http://localhost:8000/api/Branch/"
                );
                setBranchData(response.data);
            } catch (error) {
                console.error("Error fetching branches:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        if (confirm("آیا از حذف این شاخه مطمئنید؟")) {
            try {
                await axios.delete(`http://localhost:8000/api/Branch/${id}`);
                setBranchData(branchData.filter(item => item.id !== id));
                alert("شاخه با موفقیت حذف شد");
            } catch (error) {
                console.error("Error deleting branch:", error);
                alert("خطا در حذف شاخه");
            }
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <Link
                    href="/dashboard/branches/addBranch"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                    افزودن شاخه جدید
                </Link>
            </div>

            <table className="border border-gray-300 rounded-md shadow-md w-full">
                <thead className="bg-[#EDF9FD]">
                    <tr className="border-2 border-[#1c58dd] text-[#1c58dd]">
                        <th className="p-4 border border-[#1c58dd]">Branch Name</th>
                        <th className="p-4 border border-[#1c58dd]">Branch City</th>
                        <th className="p-4 border border-[#1c58dd]">Branch Manager</th>
                        <th className="p-4 border border-[#1c58dd]">Delete</th>
                        <th className="p-4 border border-[#1c58dd]">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {branchData.map((item) => (
                        <tr className="border-2 border-[#1c58dd]" key={item.id}>
                            <td className="p-2 text-center">{item.branchName}</td>
                            <td className="p-2 text-center">{item.branchCity}</td>
                            <td className="p-2 text-center">{item.branchManager}</td>
                            <td className="p-2 text-center text-red-500 cursor-pointer">
                                <MdDeleteForever
                                    onClick={() => handleDelete(item.id)}
                                    size={24}
                                />
                            </td>
                            <td className="p-2 text-center text-[#1c58dd] cursor-pointer">
                                {/* ✅ استفاده از updatedD مطابق با نام پوشه */}
                                <Link href={`/dashboard/branches/manageBranch/${item.id}`}>
                                    <AiFillEdit size={24} />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}





//tonight change 5 shamba
// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MdDeleteForever } from "react-icons/md";
// import { AiFillEdit } from "react-icons/ai";
// import Link from "next/link";

// export interface branchType {
//     id: number;
//     branchName: string;
//     branchManager: string;
//     branchCity: string;
// }

// export default function ManageBranchPage() {
//     const [branchData, setBranchData] = useState<branchType[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get<branchType[]>(
//                     "http://localhost:8000/api/Branch"
//                 );
//                 setBranchData(response.data);
//             } catch (error) {
//                 console.error("Error fetching branches:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="p-4">
//             <table className="border border-gray-300 rounded-md shadow-md w-full">
//                 <thead className="bg-[#EDF9FD]">
//                     <tr className="border-2 border-[#1c58dd] text-[#1c58dd]">
//                         <th className="p-4 border border-[#1c58dd]">Branch Name</th>
//                         <th className="p-4 border border-[#1c58dd]">Branch City</th>
//                         <th className="p-4 border border-[#1c58dd]">Branch Manager</th>
//                         <th className="p-4 border border-[#1c58dd]">Delete</th>
//                         <th className="p-4 border border-[#1c58dd]">Update</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {branchData.map((item) => (
//                         <tr className="border-2 border-[#1c58dd]" key={item.id}>
//                             <td className="p-2 text-center">{item.branchName}</td>
//                             <td className="p-2 text-center">{item.branchCity}</td>
//                             <td className="p-2 text-center">{item.branchManager}</td>
//                             <td className="p-2 text-center text-red-500 cursor-pointer">
//                                 <Link href={'/components'}>  <MdDeleteForever /></Link>
//                             </td>
//                             <td className="p-2 text-center text-[#1c58dd] cursor-pointer">
//                                 <Link href={`/dashboard/branches/manageBranch/${item.id}`}> <AiFillEdit /></Link>

//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }




// import { MdDeleteForever } from "react-icons/md";
// <MdDeleteForever />

// import { AiFillEdit } from "react-icons/ai";
// <AiFillEdit />














// static api

// import axsios from 'axios'
// import { useState } from 'react'




// export interface branchType {
//     id: number,
//     name: string,
//     branchName: string,
//     branchManager: string,
//     branchCity: string
// }
// export default async function ManageBranchPage() {
//     const [brancData, setBranchData] = useState([])

//     const data = await axsios.get<branchType>('http://localhost:8000/api/Branch').then(response => setBranchData(response))

//     return (
//         <div className="p-4 -z-2 ">
//             <table className=" border border-gray-300 rounded-md shadow-md ">
//                 <thead className='bg-[#EDF9FD]'>
//                     <tr className="border-2 border-[#1c58dd]  text-[#1c58dd]">
//                         <th className="p-4 border border-[#1c58dd]">branchName</th>
//                         <th className="p-4 border border-[#1c58dd]" >branchCity</th>
//                         <th className="p-4 border border-[#1c58dd]">branchManager</th>
//                         <th className="p-4 border border-[#1c58dd]">delete</th>
//                         <th className="p-4 border border-[#1c58dd]">update</th>
//                     </tr>
//                 </thead>
//                 <tbody >

//                     {branch.map((item) => (
//                         <tr className="border-2 border-[#1c58dd]" key={item.id} >
//                             <td className="p-2 text-center">{item.branchName}</td>
//                             <td className="p-2 text-center">{item.branchCity}</td>
//                             <td className="p-2 text-center">{item.branchManager}</td>
//                             <td className="p-2 text-center text-red-500">delete</td>
//                             <td className="p-2 text-center text-[#1c58dd]">update</td>
//                         </tr>
//                     ))}

//                 </tbody>
//             </table>
//         </div>
//     )
// }









