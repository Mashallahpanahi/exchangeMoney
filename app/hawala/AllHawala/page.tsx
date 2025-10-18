'use client';

import ShowAllColumns from "@/app/components/ShowAllColumns";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

export interface HawalaType {
    id: number,
    date: string;
    customerType: string;
    amountMoney: string;
    voucherNumber: string;
    currency: string;
    comment: string;
    commission: string;
    receiverIdCard: string;
    receiverAddress: string;
    receiverPhoneNumber: string;
    receiverLastName: string;
    receiverName: string;
    senderName: string;
    senderLastName: string;
    senderPhoneNumber: string;
    senderAddress: string;
    branch_id: number;
    status: string;
    senderLocation: string;
    receiverLocation: string;
    senderIdCard: string;
}

export default function All() {
    const [allHawala, setAllHawala] = useState<HawalaType[]>([]);
    const [showAllColumns, setShowAllColumns] = useState(false);

    useEffect(() => {
        const fetchHawala = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/voucher");
                if (!res.ok) throw new Error("Failed to fetch voucher");
                const data = await res.json();
                setAllHawala(data);
            } catch (error) {
                console.error("Error fetching voucher:", error);
            }
        };
        fetchHawala();
    }, []);


    const visibleColumns = ['senderName', 'receiverName', 'amountMoney', 'voucherNumber', 'Delete', 'Edit', 'showAll'];

    const toggleColumns = () => {
        setShowAllColumns(!showAllColumns);
    };




    const handleDelete = async (id: number) => {
        if (confirm("آیا از حذف این مطمعن هستین؟")) {
            try {
                await axios.delete(`http://localhost:8000/api/voucher/${id}`);
                setAllHawala(allHawala.filter(item => item.id !== id));
                alert("حواله با موفقیت حذف شد");
            } catch (error) {
                console.error("Error deleting branch:", error);
                alert("خطا در حذف ");
            }
        }
    };


    return (
        <div className="w-full overflow-x-auto p-2 ">
            <div className="flex justify-between items-center mb-1 mt-4 p-2 w-[300px] bg-gray-100 shadow-lg rounded-md">
                <h1 className="text-xl font-semibold text-naqibBlue">All Hawala Info</h1>
                <Link href={'/dashboard'}>
                    <button
                        className="bg-naqibBlue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <span> dashboard</span>
                    </button>
                </Link>
            </div>

            <div className="w-full">
                <table className="text-center w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            {visibleColumns.map((item) => (
                                <th key={item} className="border border-white p-1 capitalize">
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {allHawala.map((h, i) => (
                            <tr
                                key={i}
                                className="odd:bg-gray-200 even:bg-white  shadow-sm"
                            >
                                {visibleColumns.map((col) => {

                                    if (col === "Delete") {
                                        return (
                                            <td key={col} className="p-2 text-center">
                                                <MdDeleteForever className="text-red-500 cursor-pointer text-2xl mx-auto"
                                                    onClick={() => handleDelete(h.id)}
                                                    size={22}
                                                />
                                            </td>
                                        );
                                    }
                                    else if (col === "Edit") {
                                        return (
                                            <td key={col} className="p-2 text-center">
                                                <Link href={`/hawala/AllHawala/${h.id}`}>
                                                    <CiEdit className="text-blue-500 cursor-pointer text-2xl mx-auto" />
                                                </Link>
                                            </td>

                                        );
                                    } else if (col === "showAll") {
                                        return (
                                            <td key={col} className="p-2 text-center">
                                                <Link href={`/hawala/showAllColumns/${h.id}`}>
                                                    <span className="flex items-center justify-center">
                                                        <IoEyeSharp size={22} />
                                                    </span>
                                                </Link>

                                            </td>

                                        );
                                    }


                                    else {
                                        return (
                                            <td key={col} className=" px-2 ">
                                                {h[col as keyof HawalaType] ?? '-'}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


















