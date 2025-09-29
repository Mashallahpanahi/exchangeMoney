


import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

export default function TransactionMoney({ isOpen, onClose }: exchangeType) {
    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const [openAccountCraded, setOpenAccountCraded] = useState(false)
    const [openAccountDebit, setOpenAccountDebit] = useState(false)

    const [Currency, setCurrency] = useState("دالر");
    const [accountCraded, setAccountCraded] = useState("حساب شرکت");
    const [accountDebit, setAccountDebit] = useState("حساب نمایندگی");

    const [amount, setAmount] = useState<number | "">("");
    const [goal, setGoal] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [date, setDate] = useState<string>("");


    const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
    const accountList = ["حساب شرکت", "عزیزی بانک", "حساب نمایندگی ",]

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            Currency,
            accountCraded,
            accountDebit,
            goal,
            details,
            amount,
            date,
        };

        try {
            const res = await fetch("http://localhost:8000/api/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error("Failed to submit exchange rate");
            }

            const data = await res.json();
            console.log("✅ Success:", data);

            onClose();
        } catch (error) {
            console.error(" Error:", error);
        }
    };



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-varWhite rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">

                <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-lg font-semibold">ورود معامله</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Scl */}
                <div className="overflow-y-auto flex-1 p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                            <div>
                                <label className="block font-bold p-2">واحدپول</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenFromCurrency(!openFromCurrency)}
                                    >
                                        <span>{Currency}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openFromCurrency && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="text"
                                                onChange={(e) => setCurrency(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {selectCurrency.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setCurrency(opt);
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
                                <label className="block font-bold p-2">رسیدگی حساب</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenAccountCraded(!openAccountCraded)}
                                    >
                                        <span>{accountCraded}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openAccountCraded && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="text"
                                                onChange={(e) => setAccountCraded(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {accountList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setAccountCraded(opt);
                                                        setOpenAccountCraded(false);
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
                                <label className="block font-bold p-2">باقی حساب</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenAccountDebit(!openAccountDebit)}
                                    >
                                        <span>{accountDebit}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openAccountDebit && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="text"
                                                onChange={(e) => setAccountDebit(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {accountList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setAccountDebit(opt);
                                                        setOpenAccountDebit(false);
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
                                <label className="p-2">مبلغ</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="p-2">هدف انتفال</label>
                                <input
                                    type="text"
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="p-2">جزیات</label>
                                <input
                                    type="text"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="p-2">تاریخ</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

