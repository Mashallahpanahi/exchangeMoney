"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { branchType } from "@/app/dashboard/branches/manageBranch/page";
import { HawalaType } from "../page";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

export default function UpdateHawalaPage() {
    const params = useParams();
    const router = useRouter();
    const EditId = params.idForEdit as string;

    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const selectCurrency: string[] = ["دالر", "افغانی", "تومن", "کلدار"]

    const [openStatus, setOpenStatus] = useState(false)
    const statusList = ["pendding", "approved", "reject"];

    const [openCustomerType, setOpenCustomerType] = useState(false)
    const TypeOfCustomer = ["دایم", "موقت"]

    const [branches, setBranches] = useState<branchType[]>([]);
    const [target, setTarget] = useState<HawalaType | null>(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        date: '',
        customerType: '',
        amountMoney: 0,
        voucherNumber: '',
        currency: '',
        comment: '',
        commission: 0,
        receiverIdCard: '',
        receiverAddress: '',
        receiverPhoneNumber: '',
        receiverLastName: '',
        receiverName: '',
        senderName: '',
        senderLastName: '',
        senderPhoneNumber: '',
        senderAddress: '',
        branch_id: 1,
        status: '',
        senderLocation: '',
        receiverLocation: '',
        senderIdCard: ''
    });

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/Branch");
                if (!res.ok) {
                    throw new Error("Failed to fetch branches");
                }
                const data = await res.json();
                setBranches(data);
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
                const response = await axios.get<HawalaType>(
                    `http://localhost:8000/api/voucher/${EditId}`
                );

                if (response.data) {
                    const found = response.data;
                    setTarget(found);


                    const dateValue = found.date ? new Date(found.date).toISOString().split('T')[0] : '';

                    setFormData({
                        date: dateValue,
                        customerType: found.customerType || '',
                        amountMoney: found.amountMoney ? Number(found.amountMoney) : 0,
                        voucherNumber: found.voucherNumber || '',
                        currency: found.currency || '',
                        comment: found.comment || '',
                        commission: found.commission ? Number(found.commission) : 0,
                        receiverIdCard: found.receiverIdCard || '',
                        receiverAddress: found.receiverAddress || '',
                        receiverPhoneNumber: found.receiverPhoneNumber || '',
                        receiverLastName: found.receiverLastName || '',
                        receiverName: found.receiverName || '',
                        senderName: found.senderName || '',
                        senderLastName: found.senderLastName || '',
                        senderPhoneNumber: found.senderPhoneNumber || '',
                        senderAddress: found.senderAddress || '',
                        branch_id: found.branch_id ? Number(found.branch_id) : 1,
                        status: found.status || '',
                        senderLocation: found.senderLocation || '',
                        receiverLocation: found.receiverLocation || '',
                        senderIdCard: found.senderIdCard || ''
                    });
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'number') {
            setFormData({ ...formData, [name]: Number(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const submitData = {
                ...formData

            };

            console.log("Submitting data:", submitData);

            const res = await fetch(`http://localhost:8000/api/voucher/${EditId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });

            const responseData = await res.json();

            if (res.ok) {
                alert("Updated successfully ✅");
                router.push("/hawala/AllHawala");
            } else {
                alert(`Failed to update: ${JSON.stringify(responseData)}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Error while updating data: ${error}`);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    if (!target) {
        return <div className="flex justify-center items-center h-64">Data not found</div>;
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="min-w-80 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-4 ml-4">

                    {/* شماره حواله */}
                    <div>
                        <label className="p-2">شماره حواله</label>
                        <input
                            name="voucherNumber"
                            type="text"
                            value={formData.voucherNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* فرستنده */}
                    <div>
                        <label className="p-2">فرستنده</label>
                        <input
                            name="senderName"
                            type="text"
                            value={formData.senderName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="p-2">لقب فرستنده</label>
                        <input
                            name="senderLastName"
                            type="text"
                            value={formData.senderLastName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* شماره تماس فرستنده */}
                    <div>
                        <label className="p-2">نمبر تماس فرستنده</label>
                        <input
                            name="senderPhoneNumber"
                            type="text"
                            value={formData.senderPhoneNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* شماره تذکره فرستنده */}
                    <div>
                        <label className="p-2">نمبر تذکره فرستنده</label>
                        <input
                            name="senderIdCard"
                            type="text"
                            value={formData.senderIdCard}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* آدرس فرستنده */}
                    <div>
                        <label className="p-2">آدرس فرستنده</label>
                        <input
                            name="senderAddress"
                            type="text"
                            value={formData.senderAddress}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* موقعیت فرستنده */}
                    <div>
                        <label className="p-2">موقیت فرستنده</label>
                        <input
                            name="senderLocation"
                            type="text"
                            value={formData.senderLocation}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* موقعیت گیرنده */}
                    <div>
                        <label className="p-2">موقیت گیرنده</label>
                        <input
                            name="receiverLocation"
                            type="text"
                            value={formData.receiverLocation}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* گیرنده */}
                    <div>
                        <label className="p-2">گیرنده</label>
                        <input
                            name="receiverName"
                            type="text"
                            value={formData.receiverName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* لقب گیرنده */}
                    <div>
                        <label className="p-2">لقب گیرنده</label>
                        <input
                            name="receiverLastName"
                            type="text"
                            value={formData.receiverLastName}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* شماره تماس گیرنده */}
                    <div>
                        <label className="p-2">نمبر تماس گیرنده</label>
                        <input
                            name="receiverPhoneNumber"
                            type="text"
                            value={formData.receiverPhoneNumber}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* شماره تذکره گیرنده */}
                    <div>
                        <label className="p-2">نمبر تذکره گیرنده</label>
                        <input
                            name="receiverIdCard"
                            type="text"
                            value={formData.receiverIdCard}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>

                    {/* آدرس گیرنده */}
                    <div>
                        <label className="p-2">آدرس گیرنده</label>
                        <input
                            name="receiverAddress"
                            type="text"
                            value={formData.receiverAddress}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* نمایندگی */}
                    <div>
                        <label className="block font-bold">نمایندگی</label>
                        <select
                            name="branch_id"
                            value={formData.branch_id}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        >
                            {branches.map((branch) => (
                                <option key={branch.id} value={branch.id}>
                                    {branch.branchName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* نوع مشتری */}
                    <div>
                        <label className="block">نوع مشتری</label>
                        <div className="relative">
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenCustomerType(!openCustomerType)}
                            >
                                <span>{formData.customerType || "انتخاب نوع مشتری"}</span>
                                <MdArrowDropDown />
                            </div>
                            {openCustomerType && (
                                <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                    {TypeOfCustomer.map((opt) => (
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

                    {/* واحد پول */}
                    <div>
                        <label className="block font-bold">واحدپول</label>
                        <div className="relative">
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenFromCurrency(!openFromCurrency)}
                            >
                                <span>{formData.currency || "انتخاب واحد پول"}</span>
                                <MdArrowDropDown />
                            </div>
                            {openFromCurrency && (
                                <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                    {selectCurrency.map((opt) => (
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

                    {/* مبلغ */}
                    <div>
                        <label className="p-2">مبلغ</label>
                        <input
                            name="amountMoney"
                            type="number"
                            value={formData.amountMoney}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required


                        />
                    </div>

                    {/* کمیسیون */}
                    <div>
                        <label className="p-2">مقدار کمیشن</label>
                        <input
                            name="commission"
                            type="number"
                            value={formData.commission}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                            step="0.01"
                            min="0"
                        />
                    </div>

                    {/* جزئیات */}
                    <div>
                        <label className="p-2">جزیات</label>
                        <input
                            name="comment"
                            type="text"
                            value={formData.comment}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                        />
                    </div>

                    {/* حالت حواله */}
                    <div>
                        <label className="block">حالت حواله</label>
                        <div className="relative">
                            <div
                                className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                onClick={() => setOpenStatus(!openStatus)}
                            >
                                <span>{formData.status || "انتخاب وضعیت"}</span>
                                <MdArrowDropDown />
                            </div>
                            {openStatus && (
                                <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                    {statusList.map((opt) => (
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

                    {/* تاریخ */}
                    <div>
                        <label className="p-2">تاریخ</label>
                        <input
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                            required
                        />
                    </div>



                </div>

                <div className="mt-6 flex justify-end ">
                    <button
                        type="submit"
                        className=" bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                    >
                        Save
                    </button>
                    <Link href={'/dashboard'}>
                        <button
                            className="mr-4 ml-2 bg-naqibBlue hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            <span> dashboard</span>
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    );
}