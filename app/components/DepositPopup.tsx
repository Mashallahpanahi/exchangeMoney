

import { ChangeEvent, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

interface Customer {
    id: number;
    name: string;
}

export default function DepositPopup({ isOpen, onClose }: exchangeType) {
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

    const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
    const slectChangeType = ["رسیدگی", "بردگی"];


    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/Customer");
                if (!res.ok) {
                    throw new Error("Failed to fetch customers");
                }
                const data = await res.json();
                setCustomers(data);
                if (data.length > 0) {
                    setCustomer_id(data[0].id); // انتخاب اولین مشتری به عنوان پیش‌فرض
                }
            } catch (error) {
                console.error("Error fetching customers:", error);
            } finally {
                setLoading(false);
            }
        };

        if (isOpen) {
            fetchCustomers();
        }
    }, [isOpen]);

    if (!isOpen) return null;



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
            const res = await fetch("http://localhost:8000/api/journal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(journalData),
            });

            if (!res.ok) {
                throw new Error("Failed to submit exchange rate");
            }

            const data = await res.json();
            console.log("✅ Success:", data);
            alert(`${data.message}`);
            onClose();
        } catch (error) {
            console.error(" Error:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-varWhite rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-lg font-semibold">ثبت بردگی و رسیدگی</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

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
                                            {customer.name}
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
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
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
        </div>
    );
}











