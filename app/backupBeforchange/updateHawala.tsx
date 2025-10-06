


"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { branchType } from "@/app/dashboard/branches/manageBranch/page";
import { HawalaType } from "../page";
import { MdArrowDropDown } from "react-icons/md";


export default function UpdateHawalaPage() {
    const params = useParams();
    const router = useRouter();
    const EditId = params.idForEdit as string;

    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const selectCurrency: string[] = ["کلدار", "تومن", "افغانی", "دالر"]

    const [openStatus, setOpenStatus] = useState(false)
    const statusList = ["pendding", "approved", "reject"];

    const [openCustomerType, setOpenCustomerType] = useState(false)
    const TypeOfCustomer = ["دایم", "موقت"]




    const [branch_id, setBranch_id] = useState<number>(1)
    const [branches, setBranches] = useState<branchType[]>([]);
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/Branch");
                if (!res.ok) {
                    throw new Error("Failed to fetch customers");
                }
                const data = await res.json();
                setBranches(data);
                if (data.length > 0) {
                    setBranch_id(data[0].id); // انتخاب اولین مشتری به عنوان پیش‌فرض
                }
            } catch (error) {
                console.error("Error fetching customers:", error);
            } finally {
                setLoading(false);
            }
        };


        fetchCustomers();

    }, []);

    const [target, setTarget] = useState<HawalaType | null>(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        date: '',
        customerType: '',
        amountMoney: '',
        voucherNumber: '',
        currency: '',
        comment: '',
        commission: '',
        receiverIdCard: '',
        receiverAddress: '',
        receiverPhoneNumber: '',
        receiverLastName: '',
        receiverName: '',
        senderName: '',
        senderLastName: '',
        senderPhoneNumber: '',
        senderAddress: '',
        branch_id: '',
        status: '',
        senderLocation: '',
        receiverLocation: '',
        senderIdCard: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<HawalaType[]>(
                    `http://localhost:8000/api/voucher/`
                );

                if (response.data.length > 0 && EditId) {
                    const found = response.data.find(h => h.id === parseInt(EditId));
                    if (found) {
                        setTarget(found);
                        setFormData({
                            date: found.date || '',
                            customerType: found.customerType || '',
                            amountMoney: found.amountMoney || '',
                            voucherNumber: found.voucherNumber || '',
                            currency: found.currency || '',
                            comment: found.comment || '',
                            commission: found.commission || '',
                            receiverIdCard: found.receiverIdCard || '',
                            receiverAddress: found.receiverAddress || '',
                            receiverPhoneNumber: found.receiverPhoneNumber || '',
                            receiverLastName: found.receiverLastName || '',
                            receiverName: found.receiverName || '',
                            senderName: found.senderName || '',
                            senderLastName: found.senderLastName || '',
                            senderPhoneNumber: found.senderPhoneNumber || '',
                            senderAddress: found.senderAddress || '',
                            branch_id: found.branch_id || '',
                            status: found.status || '',
                            senderLocation: found.senderLocation || '',
                            receiverLocation: found.receiverLocation || '',
                            senderIdCard: found.senderIdCard || ''
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (EditId) {
            fetchData();
        }
    }, [EditId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const res = await fetch(`http://localhost:8000/api/voucher/${EditId}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData)
    //         });

    //         if (res.ok) {
    //             alert("Updated successfully ✅");
    //             router.push("/hawala/AllHawala");
    //         } else {
    //             alert("Failed to update voucher");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         alert(`Error while updating data ${error}`);
    //     }
    // };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:8000/api/voucher/${EditId}`, {
                method: "PUT", //  manzor is put haman update ast"
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert(" updated successfully ✅");
                router.push("/hawala/AllHawala");
            } else {
                alert("Failed to update ");
            }
        } catch (error) {
            console.error(error);
            alert(`Error while updating data ${error}`);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64" > Loading...</div>;
    }

    if (!target) {
        return <div className="flex justify-center items-center h-64" > Data not found </div>;
    }

    return (
        <div className="" >
            <form onSubmit={handleSubmit}>
                <div className="min-w-80  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-4 ml-4" >

                    {/* hawalaNumber */}
                    < div >
                        <label className="p-2" > شماره حواله </label>
                        < input
                            name="voucherNumber"
                            type="text"
                            value={formData.voucherNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    {/* sender */}
                    <div>
                        <label className="p-2" > فرستنده </label>
                        < input
                            name="senderName"
                            type="text"
                            value={formData.senderName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    < div >
                        <label className="p-2" > لقب فرستنده </label>
                        < input
                            name="senderLastName"
                            type="text"
                            value={formData.senderLastName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* SenderPhone */}
                    <div>
                        <label className="p-2" > نمبر تماس فرستنده </label>
                        < input
                            name="senderPoneNumber"
                            type="text"
                            value={formData.senderPhoneNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    {/* senderIdCard */}
                    <div>
                        <label className="p-2" > نمبر تذکره فرستنده </label>
                        < input
                            name="senderIdCard"
                            type="text"
                            value={formData.senderIdCard}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    < div >
                        <label className="p-2" > آدرس فرستنده </label>
                        < input
                            name="senderAddress"
                            type="text"
                            value={formData.senderAddress}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    {/* senderLocation */}
                    <div>
                        <label className="p-2" > موقیت فرستنده </label>
                        < input
                            name="senderLocation"
                            type="text"
                            value={formData.senderLocation}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    {/* receiverLocation */}
                    <div>
                        <label className="p-2" > موقیت گیرنده </label>
                        < input
                            name="receiverLoation"
                            type="text"
                            value={formData.receiverLocation}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* resiver name */}
                    <div>
                        <label className="p-2" > گیرنده </label>
                        < input
                            name="receiverName"
                            type="text"
                            value={formData.receiverName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* receiverLastName */}
                    <div>
                        <label className="p-2" > لقب گیرنده </label>
                        < input
                            name="receiverLastName"
                            type="text"
                            value={formData.receiverLastName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>
                    {/* resiverPhone */}
                    <div>
                        <label className="p-2" > نمبر تماس گیرنده </label>
                        < input
                            name="receiverPhoneNumber"
                            type="text"
                            value={formData.receiverPhoneNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>


                    {/* resiverIDcard */}
                    <div>
                        <label className="p-2" > نمبر تذکره گیرنده </label>
                        < input
                            name="receiverIdCard"
                            type="text"
                            value={formData.receiverIdCard}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* receiverAddress */}
                    <div>
                        <label className="p-2" > آدرس گیرنده </label>
                        < input
                            name="receiverAddress"
                            type="text"
                            value={formData.receiverAddress}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>


                    {/* branches */}
                    <div className="" >
                        <label className="block font-bold " > نمایندگی </label>
                        < select
                            name="user_id"
                            value={formData.branch_id}
                            onChange={(e) => setBranch_id(parseInt(e.target.value))
                            }
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        >
                            {
                                branches.map((brand) => (
                                    <option key={brand.id} value={brand.id} >
                                        {brand.branchName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>




                    {/* currency */}
                    <div>
                        <label className="block font-bold" > واحدپول </label>
                        < div className="relative" >
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenFromCurrency(!openFromCurrency)}
                            >
                                <span>{formData.currency || "انتخاب واحد پول"} </span>
                                < MdArrowDropDown />
                            </div>
                            {
                                openFromCurrency && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto" >
                                        <input
                                            type="text"
                                            placeholder="جستجو..."
                                            // ...formData= take all data  currency: and come put value to the currency
                                            onChange={(e) => setFormData({ ...formData, currency: e.target.value })
                                            }
                                            className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                        />
                                        {
                                            selectCurrency.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setFormData({ ...formData, currency: opt });
                                                        setOpenFromCurrency(false);

                                                    }}
                                                    className="p-2 hover:bg-formSelectHover cursor-pointer"
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                    </div>
                                )}
                        </div>
                    </div>



                    {/* amount */}
                    <div>
                        <label className="p-2" > مبلغ </label>
                        < input
                            name="amountMoney"
                            type="number"
                            value={formData.amountMoney}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* amountCommission */}
                    <div>
                        <label className="" > مقدار کمیشن </label>
                        < input
                            name="commission"
                            type="number"
                            value={formData.commission}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* comment */}
                    <div>
                        <label className="p-2" > جزیات </label>
                        < input
                            name="comment"
                            type="text"
                            value={formData.comment}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>


                    {/* status */}
                    <div>
                        <label className="block  " > حالت حواله </label>
                        < div className="relative" >
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenStatus(!openStatus)}
                            >
                                <span>{formData.status} </span>
                                < MdArrowDropDown />
                            </div>
                            {
                                openStatus && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto" >
                                        <input
                                            name="status"
                                            type="text"
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })
                                            }
                                            className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                        />
                                        {
                                            statusList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setFormData({ ...formData, status: opt })
                                                        setOpenStatus(false);
                                                    }}
                                                    className="p-2 hover:bg-formSelectHover cursor-pointer"
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                    </div>
                                )}
                        </div>
                    </div>



                    {/* date */}
                    <div>
                        <label className="p-2" > تاریخ </label>
                        < input
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>


                    {/*customerType */}
                    <div>
                        <label className="block " > نوع مشتری </label>
                        < div className="relative" >
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenCustomerType(!openCustomerType)}
                            >
                                <span>{formData.customerType} </span>
                                < MdArrowDropDown />
                            </div>
                            {
                                openCustomerType && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto" >
                                        <input
                                            name="customerType"
                                            type="text"
                                            onChange={(e) => setFormData({ ...formData, customerType: e.target.value })
                                            }
                                            className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                        />
                                        {
                                            TypeOfCustomer.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setFormData({ ...formData, customerType: opt });
                                                        setOpenCustomerType(false);
                                                    }}
                                                    className="p-2 hover:bg-formSelectHover cursor-pointer"
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                    </div>
                                )}
                        </div>
                    </div>



                </div>

                < div className="mt-6 flex justify-end" >
                    <button
                        type="submit"
                        className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

