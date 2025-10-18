"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { branchType } from "@/app/dashboard/branches/manageBranch/page";

export interface HawalaTypeWithBranchName {
    id: number;
    customerType: string;
    date: string;
    voucherNumber: string;
    receiverLocation: string;
    senderLocation: string;
    status: string;
    branch_id: number;
    senderName: string;
    senderLastName: string;
    senderPhoneNumber: string;
    senderAddress: string;
    senderIdCard: string;
    receiverName: string;
    receiverLastName: string;
    receiverPhoneNumber: string;
    receiverAddress: string;
    receiverIdCard: string;
    amountMoney: string;
    commission: string;
    currency: string;
    comment: string;
    created_at: string | null;
    updated_at: string | null;
}

export default function ShowAllColumns() {
    const params = useParams();
    const col_id = params.col_id;
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<HawalaTypeWithBranchName>();
    const [branchName, setBranchName] = useState<string>("");
    const [branches, setBranches] = useState<branchType[]>([]);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await axios.get<branchType[]>("http://localhost:8000/api/Branch/");
                setBranches(response.data);
            } catch (error) {
                console.error("Error fetching branches:", error);
            }
        };

        fetchBranches();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<HawalaTypeWithBranchName>(
                    `http://localhost:8000/api/voucher/${col_id}`
                );

                if (response.data) {
                    const found = response.data;
                    setFormData(found);

                    // Find branch name after formData is set and branches are loaded
                    if (branches.length > 0) {
                        const foundBranch = branches.find((branch) => branch.id === found.branch_id);
                        if (foundBranch) {
                            setBranchName(foundBranch.branchName || "");
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (col_id) {
            fetchData();
        }
    }, [col_id, branches]);


    useEffect(() => {
        if (formData && branches.length > 0) {
            const foundBranch = branches.find((branch) => branch.id === formData.branch_id);
            if (foundBranch) {
                setBranchName(foundBranch.branchName || "");
            }
        }
    }, [formData, branches]);

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    if (!formData) {
        return <div className="flex justify-center items-center h-64">Data not found</div>;
    }

    return (
        <div className="">
            <div className="mt-10">
                <div className="min-w-80 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mr-4 ml-4">

                    {/* شماره حواله */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10 pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.voucherNumber}</h2>
                        <h1 className="text-[#a1a09ee9] ">= شماره حواله</h1>
                    </div>

                    {/* فرستنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.senderName}</h2>
                        <h1 className="text-[#a1a09ee9] ">= فرستنده</h1>
                    </div>

                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.senderLastName}</h2>
                        <h1 className="text-[#a1a09ee9] ">= تخلص فرستنده</h1>
                    </div>

                    {/* شماره تماس فرستنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.senderPhoneNumber}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نمبر تماس فرستنده</h1>
                    </div>

                    {/* شماره تذکره فرستنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.senderIdCard}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نمبرتذکره فرستنده</h1>
                    </div>

                    {/* آدرس فرستنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
                        <h2 className="text-bold text-black ">{formData.senderAddress}</h2>
                        <h1 className="text-[#a1a09ee9] ">= آدرس فرستنده</h1>
                    </div>

                    {/* موقعیت فرستنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.senderLocation}</h2>
                        <h1 className="text-[#a1a09ee9] ">= موقعیت فرستنده</h1>
                    </div>

                    {/* موقعیت گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverLocation}</h2>
                        <h1 className="text-[#a1a09ee9] ">= موقعیت گیرنده</h1>
                    </div>

                    {/* گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverName}</h2>
                        <h1 className="text-[#a1a09ee9] ">= گیرنده</h1>
                    </div>

                    {/* لقب گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverLastName}</h2>
                        <h1 className="text-[#a1a09ee9] ">= تخلص گیرنده</h1>
                    </div>

                    {/* شماره تماس گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverPhoneNumber}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نمبر تماس گیرنده</h1>
                    </div>

                    {/* شماره تذکره گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverIdCard}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نمبر تذکره گیرنده</h1>
                    </div>

                    {/* آدرس گیرنده */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.receiverAddress}</h2>
                        <h1 className="text-[#a1a09ee9] ">= آدرس گیرنده</h1>
                    </div>

                    {/* نمایندگی */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{branchName || "Loading..."}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نمایندگی</h1>
                    </div>

                    {/* نوع مشتری */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.customerType}</h2>
                        <h1 className="text-[#a1a09ee9] ">= نوع مشتری</h1>
                    </div>

                    {/* واحد پول */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.currency}</h2>
                        <h1 className="text-[#a1a09ee9] ">= واحدپول</h1>
                    </div>

                    {/* مبلغ */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.amountMoney}</h2>
                        <h1 className="text-[#a1a09ee9] ">= مبلغ</h1>
                    </div>

                    {/* کمیسیون */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.commission}</h2>
                        <h1 className="text-[#a1a09ee9] ">= کمیشن</h1>
                    </div>

                    {/* جزئیات */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.comment}</h2>
                        <h1 className="text-[#a1a09ee9] ">= شرح</h1>
                    </div>

                    {/* حالت حواله */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.status}</h2>
                        <h1 className="text-[#a1a09ee9] ">= حالت حواله</h1>
                    </div>

                    {/* تاریخ */}
                    <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
                        <h2 className="text-bold text-black ">{formData.date}</h2>
                        <h1 className="text-[#a1a09ee9] ">= تاریخ</h1>
                    </div>
                </div>

                <div className="mt-2 flex justify-end ">
                    <Link href={'/hawala/AllHawala'}>
                        <button
                            className="m-4 bg-formInputBorder  text-white px-4 py-2 rounded-md transition-colors w-[200px] shadow-md hover:bg-[#a4f3caee]"
                        >
                            <span className="font-bold">برگشت</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}














// can't show the branch name
// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";

// export interface HawalaTypeWithBranchName {
//     id: number;
//     customerType: string;
//     date: string;
//     voucherNumber: string;
//     receiverLocation: string;
//     senderLocation: string;
//     status: string;
//     branch_id: number;
//     senderName: string;
//     senderLastName: string;
//     senderPhoneNumber: string;
//     senderAddress: string;
//     senderIdCard: string;
//     receiverName: string;
//     receiverLastName: string;
//     receiverPhoneNumber: string;
//     receiverAddress: string;
//     receiverIdCard: string;
//     amountMoney: string;
//     commission: string;
//     currency: string;
//     comment: string;
//     created_at: string | null;
//     updated_at: string | null;

// }


// export default function ShowAllColumns() {
//     const params = useParams();
//     const col_id = params.col_id;
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState<HawalaTypeWithBranchName>();


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get<HawalaTypeWithBranchName>(
//                     `http://localhost:8000/api/voucher/${col_id}`
//                 );

//                 if (response.data) {
//                     const found = response.data;
//                     setFormData(found)

//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (col_id) {
//             fetchData();
//         }
//     }, [col_id]);
//     if (!formData) return

//     return (
//         <div className="">
//             <div className="mt-10">
//                 <div className="min-w-80 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mr-4 ml-4">

//                     {/* شماره حواله */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10 pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.voucherNumber}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= شماره حواله</h1>

//                     </div>

//                     {/* فرستنده */}

//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.senderName}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= فرستنده</h1>

//                     </div>
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.senderLastName}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= تخلص فرستنده</h1>

//                     </div>

//                     {/* شماره تماس فرستنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.senderPhoneNumber}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نمبر تماس فرستنده</h1>

//                     </div>

//                     {/* شماره تذکره فرستنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.senderIdCard}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نمبرتذکره فرستنده</h1>

//                     </div>

//                     {/* آدرس فرستنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8 p-2">
//                         <h2 className="text-bold text-black ">{formData.senderAddress}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= آدرس فرستنده</h1>

//                     </div>

//                     {/* موقعیت فرستنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.senderLocation}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= موقعیت فرستنده</h1>

//                     </div>

//                     {/* موقعیت گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverLocation}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= موقعیت گیرنده</h1>

//                     </div>

//                     {/* گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverName}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= گیرنده</h1>

//                     </div>

//                     {/* لقب گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverLastName}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= تخلص گیرنده</h1>

//                     </div>

//                     {/* شماره تماس گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverPhoneNumber}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نمبر تماس گیرنده</h1>

//                     </div>

//                     {/* شماره تذکره گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverIdCard}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نمبر تذکره گیرنده</h1>

//                     </div>

//                     {/* آدرس گیرنده */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.receiverAddress}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= آدرس گیرنده</h1>

//                     </div>
//                     {/* نمایندگی */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">y</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نمایندگی</h1>

//                     </div>
//                     {/* نوع مشتری */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.customerType}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= نوع مشتری</h1>

//                     </div>
//                     {/* واحد پول */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.currency}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= واحدپول</h1>

//                     </div>

//                     {/* مبلغ */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.amountMoney}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= مبلغ</h1>

//                     </div>

//                     {/* کمیسیون */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.commission}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= کمیشن</h1>
//                     </div>

//                     {/* جزئیات */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.comment}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= شرح</h1>
//                     </div>
//                     {/* حالت حواله */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.status}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= حالت حواله</h1>
//                     </div>

//                     {/* تاریخ */}
//                     <div className="bg-formInputBg border border-formInputBorder rounded-md flex items-center justify-between shadow-md max-h-10  pr-8 pl-8  p-2">
//                         <h2 className="text-bold text-black ">{formData.date}</h2>
//                         <h1 className="text-[#a1a09ee9] ">= تاریخ</h1>
//                     </div>
//                 </div>

//                 <div className="mt-2 flex justify-end ">
//                     <Link href={'/hawala/AllHawala'}>
//                         <button
//                             className="m-4 bg-formInputBorder  text-white px-4 py-2 rounded-md transition-colors w-[200px] shadow-md hover:bg-[#a4f3caee]"
//                         >
//                             <span className="font-bold">برگشت</span>
//                         </button>
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     );
// }











