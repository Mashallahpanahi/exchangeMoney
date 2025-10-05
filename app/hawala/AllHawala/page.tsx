'use client';

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

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


    const visibleColumns = showAllColumns
        ? [
            'senderName',
            'receiverName',
            'amountMoney',
            'voucherNumber',
            'date',
            'customerType',
            'currency',
            'comment',
            'commission',
            'receiverIdCard',
            'receiverAddress',
            'receiverPhoneNumber',
            'receiverLastName',
            'senderLastName',
            'senderPhoneNumber',
            'senderIdCard',
            'senderAddress',
            'branch_id',
            'senderLocation',
            'receiverLocation',
            'Delete',
            'Edit'
        ]
        : ['senderName', 'receiverName', 'amountMoney', 'voucherNumber', 'Delete', 'Edit'];

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
            <div className="flex justify-between items-center mb-1 mt-4 p-2">
                <h1 className="text-xl font-semibold text-naqibBlue">All Hawala Info</h1>
                <button
                    onClick={toggleColumns}
                    className="bg-naqibBlue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    {showAllColumns ? 'Show Less Columns' : 'Show All Columns'}
                </button>
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
                                                    size={24}
                                                />
                                            </td>
                                        );
                                    } else if (col === "Edit") {
                                        return (
                                            <td key={col} className="p-2 text-center">
                                                <Link href={`/hawala/AllHawala/${h.id}`}>
                                                    <CiEdit className="text-blue-500 cursor-pointer text-2xl mx-auto" />
                                                </Link>
                                            </td>

                                        );
                                    } else {
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

























//origin code without loop
// 'use client';

// import { sendResponse } from "next/dist/server/image-optimizer";
// import { useEffect, useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteForever } from "react-icons/md";

// export interface HawalaType {
//     date: string,
//     customerType: string,
//     amountMoney: string,
//     voucherNumber: string,
//     currency: string,
//     comment: string,
//     commission: string,
//     receiverIdCard: string,
//     receiverAddress: string,
//     receiverPhoneNumber: string,
//     receiverLastName: string,
//     receiverName: string,
//     senderName: string,
//     senderLastName: string,
//     senderPhoneNumber: string,
//     senderAddress: string,
//     branch_id: number,
//     status: string,
//     senderLocation: string,
//     receiverLocation: string,
//     senderIdCard: string
// }

// export default function All() {
//     const [allHawala, setAllHawala] = useState<HawalaType[]>([]);
//     const [showAllColumns, setShowAllColumns] = useState(false);

//     useEffect(() => {
//         const fetchHawala = async () => {
//             try {
//                 const res = await fetch("http://localhost:8000/api/voucher");
//                 if (!res.ok) {
//                     throw new Error("Failed to fetch voucher");
//                 }
//                 const data = await res.json();
//                 setAllHawala(data);
//             } catch (error) {
//                 console.error("Error fetching voucher:", error);
//             }
//         };

//         fetchHawala();
//     }, []);

//     //when th visibleColumns be ture the first arry becom the value of visibleColumns and if that be flse the second one will be
//     // ستون‌هایی که باید نمایش داده شوند
//     const visibleColumns = showAllColumns
//         ? [
//             'senderName',
//             'receiverName',
//             'amounMoney',
//             'voucherNumber',
//             'actions',
//             'date',
//             'customerType',
//             'currency',
//             'comment',
//             'commission',
//             'receiverIdCard',
//             'receiverAddress',
//             'receiverPhoneNumber',
//             'receiverLastName',
//             'senderLastName',
//             'senderPhoneNumber',
//             'senderIdCard',
//             'senderAddress',
//             'branch_id',
//             'senderLocation',
//             'receiverLocation',]
//         : ['senderName', 'receiverName', 'amounMoney', 'voucherNumber', 'actions'];

//     const toggleColumns = () => {
//         setShowAllColumns(!showAllColumns);
//     };

//     return (
//         <div className=" w-full overflow-x-auto">
//             <div className="flex justify-between items-center mb-1 mt-4 p-2 ">
//                 <h1 className="text-xl font-semibold">All Hawala Info</h1>
//                 <button
//                     onClick={toggleColumns}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
//                 >
//                     {showAllColumns ? 'Show Less Columns' : 'Show All Columns'}
//                 </button>
//             </div>

//             <div className="w-full ">
//                 <table className="text-center w-full ">
//                     <thead className="bg-varBlack text-varWhite p-2 w-full">
//                         <tr>
//                             {visibleColumns.includes('senderName') && (
//                                 <th className="border border-white p-1">Sender_name</th>
//                             )}
//                             {visibleColumns.includes('receiverName') && (
//                                 <th className="border border-white p-1">receiver_name</th>
//                             )}
//                             {visibleColumns.includes('amounMoney') && (
//                                 <th className="border border-white p-1">Amount money</th>
//                             )}
//                             {visibleColumns.includes('currency') && (
//                                 <th className="border border-white p-1">Currency</th>
//                             )}
//                             {visibleColumns.includes('voucherNumber') && (
//                                 <th className="border border-white p-1">Hawala_number</th>
//                             )}
//                             {visibleColumns.includes('date') && (
//                                 <th className="border border-white p-1">Date</th>
//                             )}
//                             {visibleColumns.includes('status') && (
//                                 <th className="border border-white p-2">status</th>
//                             )}
//                             {visibleColumns.includes('customerType') && (
//                                 <th className="border border-white p-2">CustomerType</th>
//                             )}
//                             {visibleColumns.includes('currency') && (
//                                 <th className="border border-white p-2">Currency</th>
//                             )}
//                             {visibleColumns.includes('comment') && (
//                                 <th className="border border-white p-2">comment</th>
//                             )}
//                             {visibleColumns.includes('commission') && (
//                                 <th className="border border-white p-2">commission</th>
//                             )}
//                             {visibleColumns.includes('receiverIdCard') && (
//                                 <th className="border border-white p-2">receiverIdCard</th>
//                             )}
//                             {visibleColumns.includes('receiverAddress') && (
//                                 <th className="border border-white p-2">receiverAddress</th>
//                             )}
//                             {visibleColumns.includes('receiverPhoneNumber') && (
//                                 <th className="border border-white p-2">receiverPhoneNumber</th>
//                             )}
//                             {visibleColumns.includes('receiverLastName') && (
//                                 <th className="border border-white p-2">receiverLastName</th>
//                             )}
//                             {visibleColumns.includes('senderLastName') && (
//                                 <th className="border border-white p-2">senderLastName</th>
//                             )}
//                             {visibleColumns.includes('senderPhoneNumber') && (
//                                 <th className="border border-white p-2">senderPhoneNumber</th>
//                             )}
//                             {visibleColumns.includes('senderIdCard') && (
//                                 <th className="border border-white p-2">senderIdCard</th>
//                             )}
//                             {visibleColumns.includes('senderAddress') && (
//                                 <th className="border border-white p-2">senderAddress</th>
//                             )}
//                             {visibleColumns.includes('branch_id') && (
//                                 <th className="border border-white p-2">branch_id</th>
//                             )}
//                             {visibleColumns.includes('senderLocation') && (
//                                 <th className="border border-white p-2">senderLocation</th>
//                             )}   {visibleColumns.includes('receiverLocation') && (
//                                 <th className="border border-white p-2">receiverLocation</th>
//                             )}
//                             {visibleColumns.includes('actions') && (
//                                 <>
//                                     <th className="border border-white p-2">Delete</th>
//                                     <th className="border border-white p-2">Update</th>
//                                 </>
//                             )}
//                         </tr>
//                     </thead>
//                     <tbody className="w-full">
//                         {allHawala.map((h) => (
//                             <tr className="text-center w-ful bg-gray-100 even:bg-white hover:bg-gray-200 shadow-xl" key={h.senderIdCard}>
//                                 {visibleColumns.includes('senderName') && (
//                                     <td className=" p-1">{h.senderName}</td>
//                                 )}
//                                 {visibleColumns.includes('receiverName') && (
//                                     <td className=" p-1">{h.receiverName}</td>
//                                 )}
//                                 {visibleColumns.includes('amounMoney') && (
//                                     <td className=" p-1">{h.amountMoney}</td>
//                                 )}
//                                 {visibleColumns.includes('currency') && (
//                                     <td className=" p-1">{h.currency}</td>
//                                 )}
//                                 {visibleColumns.includes('voucherNumber') && (
//                                     <td className="p-1">{h.voucherNumber}</td>
//                                 )}
//                                 {visibleColumns.includes('date') && (
//                                     <td className=" p-1">{h.date}</td>
//                                 )}
//                                 {visibleColumns.includes('status') && (
//                                     <td className=" p-1">{h.status}</td>
//                                 )}
//                                 {visibleColumns.includes('customerType') && (
//                                     <td className=" p-1">{h.customerType}</td>
//                                 )}
//                                 {visibleColumns.includes('currency') && (
//                                     <td className=" p-1">{h.currency}</td>
//                                 )}
//                                 {visibleColumns.includes('comment') && (
//                                     <td className="p-1">{h.comment}</td>
//                                 )}
//                                 {visibleColumns.includes('commission') && (
//                                     <td className="p-1">{h.commission}</td>
//                                 )}
//                                 {visibleColumns.includes('receiverIdCard') && (
//                                     <td className=" p-1">{h.receiverIdCard}</td>
//                                 )}
//                                 {visibleColumns.includes('receiverAddress') && (
//                                     <td className=" p-1">{h.receiverAddress}</td>
//                                 )}
//                                 {visibleColumns.includes('receiverPhoneNumber') && (
//                                     <td className="p-1">{h.receiverPhoneNumber}</td>
//                                 )}
//                                 {visibleColumns.includes('receiverLastName') && (
//                                     <td className=" p-1">{h.receiverLastName}</td>
//                                 )}
//                                 {visibleColumns.includes('senderLastName') && (
//                                     <td className=" p-1">{h.senderLastName}</td>
//                                 )}
//                                 {visibleColumns.includes('senderPhoneNumber') && (
//                                     <td className=" p-1">{h.senderPhoneNumber}</td>
//                                 )}
//                                 {visibleColumns.includes('senderIdCard') && (
//                                     <td className=" p-1">{h.senderIdCard}</td>
//                                 )}
//                                 {visibleColumns.includes('senderAddress') && (
//                                     <td className=" p-1">{h.senderAddress}</td>
//                                 )}
//                                 {visibleColumns.includes('branch_id') && (
//                                     <td className=" p-1">{h.branch_id}</td>
//                                 )}
//                                 {visibleColumns.includes('senderLocation') && (
//                                     <td className="p-1">{h.senderLocation}</td>
//                                 )}   {visibleColumns.includes('receiverLocation') && (
//                                     <td className="p-1">{h.receiverLocation}</td>
//                                 )}
//                                 {visibleColumns.includes('actions') && (
//                                     <>
//                                         <td className=" p-1 text-2xl text-red-500"><MdDeleteForever className="w-full cursor-pointer" /></td>
//                                         <td className=" p-1 text-2xl">< CiEdit className="w-full cursor-pointer" /> </td>
//                                     </>
//                                 )}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }





