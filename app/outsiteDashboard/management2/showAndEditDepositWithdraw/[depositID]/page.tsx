


'use client'

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Customer, depositW } from "../page";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";




export default function DepositEdit() {
    const param = useParams()
    const id = param.depositID as string
    const router = useRouter();


    const [date, setDate] = useState<string>("");
    const [currency, setFromCurrency] = useState<string>("دالر");
    const [openFromCurrency, setOpenFromCurrency] = useState<boolean>(false)
    const [amountMoney, setAmountMoney] = useState<string>("");
    const [transactionType, setTransactionType] = useState<string>("--null--");
    const [openTransaction, setOpenTransaction] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");
    const [customer_id, setCustomer_id] = useState<number | null>(null);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const selectCurrency = ["دالر", "کلدار", "افغانی", "تومن",];
    const slectChangeType = ["رسیدگی", "بردگی"];

    // Function to find customer name by ID
    const getCustomerName = (customerId: number): string => {
        const customer = customers.find(customer => customer.id === customerId)
        return customer ? customer.name : `Customer ${customerId}`
    }



    useEffect(() => {

        const fetching = async () => {
            try {

                const customerRes = await axios.get<Customer[]>('http://localhost:8000/api/Customer')
                if (!customerRes.data) throw new Error("Failed to fetch customer data")
                setCustomers(customerRes.data)



                const res = await axios.get<depositW[]>('http://localhost:8000/api/journal')

                if (!res) throw new Error(`faild to fetching jourlnal`)

                const result: depositW[] = res.data
                const foundItem = result.find((item) => item.id === parseInt(id))

                if (foundItem) {
                    setDate(foundItem.date)
                    setFromCurrency(foundItem.currency)
                    setAmountMoney(foundItem.amountMoney)
                    setTransactionType(foundItem.transactionType)
                    setComment(foundItem.comment)
                    setCustomer_id(foundItem.customer_id)
                }

            } catch (error) {
                console.error(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetching()
    }, [])




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!customer_id) {
            alert("لطفاً یک مشتری انتخاب کنید");
            return;
        }
        const journalData = {
            date,
            transactionType,
            customer_id,
            currency,
            amountMoney,
            comment,
        };

        try {
            const res = await fetch(`http://localhost:8000/api/journal/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(journalData),
            });

            if (!res.ok) {
                throw new Error("Failed to submit journal");
            }

            const data = await res.json();
            console.log("✅ Success:", data);
            alert(`${data.message}`);
            router.refresh();
            router.push('/outsiteDashboard/management2/showAndEditDepositWithdraw')

        } catch (error) {
            console.error(" Error:", error);
        }
    };



    return (
        <div>
            <div className="overflow-y-auto flex-1 p-6">
                <form onSubmit={handleSubmit}>
                    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto flex-1 p-6">

                        <div className="">
                            <label className="block font-bold p-2">مشتری</label>
                            <select
                                value={customer_id || ""}
                                onChange={(e) => setCustomer_id(Number(e.target.value))}
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                required
                            >
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {getCustomerName(customer.id)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block font-bold p-2">واحید پول</label>
                            <div className="relative">
                                <div
                                    className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                    onClick={() => setOpenFromCurrency(!openFromCurrency)}
                                >
                                    <span>{currency}</span>
                                    <MdArrowDropDown />
                                </div>
                                {openFromCurrency && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                        <input
                                            required
                                            name="currency"
                                            type="text"
                                            onChange={(e) => setFromCurrency(e.target.value)}
                                            className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                        />
                                        {selectCurrency.map((opt) => (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    setFromCurrency(opt);
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

                        <div>
                            <label className="block font-bold p-2">رسیدگی یا بردگی؟</label>
                            <div className="relative">
                                <div
                                    className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                    onClick={() => setOpenTransaction(!openTransaction)}
                                >
                                    <span>{transactionType}</span>
                                    <MdArrowDropDown />
                                </div>
                                {openTransaction && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                        <input
                                            required
                                            name="transactionType"
                                            type="text"
                                            onChange={(e) => setTransactionType(e.target.value)}
                                            className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                        />
                                        {slectChangeType.map((opt) => (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    setTransactionType(opt);
                                                    setOpenTransaction(false);
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

                        <div>
                            <label className="p-2 z-100">مبلغ</label>
                            <input
                                required
                                name="amountMoney"
                                type="number"
                                value={amountMoney}
                                onChange={(e) => setAmountMoney(e.target.value)}
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-1000"
                            />
                        </div>

                        <div>
                            <label className="p-2 z-100">شرح</label>
                            <input
                                required
                                name="comment"
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                            />
                        </div>

                        <div>
                            <label className="p-2 z-100">تاریخ</label>
                            <input
                                required
                                name="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-formInputBg border z-90 border-formInputBorder rounded-md w-full p-2 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                            disabled={loading}
                        >
                            {loading ? "در حال بارگذاری..." : "ذخیره"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}














