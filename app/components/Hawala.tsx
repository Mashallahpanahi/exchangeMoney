



import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

export default function Hawala({ isOpen, onClose }: exchangeType) {
    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const [openCurrentBranch, setOpenCurrentBranch] = useState(false)
    const [openToBranch, setOpenToBranch] = useState(false)
    const [openCurrencyRate, setOpenCurrencyRate] = useState(false)


    const [Currency, setCurrency] = useState("");
    const [currentBranch, setCurrentBranch] = useState("");
    const [toBranch, setToBranch] = useState("");
    const [currencyRate, setCurrencyRate] = useState("");


    const [amount, setAmount] = useState<number | "">("");
    const [numberHawala, setNumberHawala] = useState<string | "">("");
    const [sender, setSender] = useState<string | "">("");
    const [resiver, setResiver] = useState<string | "">("");
    const [senderPhone, setSenderPhone] = useState<number | "">("");
    const [resiverPhone, setResiverPhone] = useState<number | "">("");
    const [IDcard, setIDcard] = useState<string | "">("");
    const [amountRate, setAmountRate] = useState<number | "">("")
    const [goal, setGoal] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [date, setDate] = useState<string>("");


    const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
    const brachList = ["Qandahar", "Kabul", "Khairkhana"]

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const hawalaFormData = {
            Currency,
            currentBranch,
            toBranch,
            numberHawala,
            sender,
            resiver,
            senderPhone,
            resiverPhone,
            IDcard,
            amountRate,
            currencyRate,
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
                body: JSON.stringify(hawalaFormData),
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
            <div className="bg-varWhite rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">

                <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-lg font-semibold">ارسال حواله</h2>
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




                            {/* hawalaNumber */}
                            <div>
                                <label className="p-2">شماره حواله</label>
                                <input
                                    type="text"
                                    value={numberHawala}
                                    onChange={(e) => setNumberHawala(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* sender */}
                            <div>
                                <label className="p-2">فرستنده</label>
                                <input
                                    type="text"
                                    value={sender}
                                    onChange={(e) => setSender(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* SenderPhone */}
                            <div>
                                <label className="p-2">نمبر تماس فرستنده</label>
                                <input
                                    type="number"
                                    value={senderPhone}
                                    onChange={(e) => setSenderPhone(e.target.value ? parseInt(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* resiver */}
                            <div>
                                <label className="p-2">گیرنده</label>
                                <input
                                    type="text"
                                    value={resiver}
                                    onChange={(e) => setResiver(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* resiverPhone */}
                            <div>
                                <label className="p-2">نمبر تماس گیرنده</label>
                                <input
                                    type="number"
                                    value={resiverPhone}
                                    onChange={(e) => setResiverPhone(e.target.value ? parseInt(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* resiverIDcard */}
                            <div>
                                <label className="p-2">نمبر تذکره</label>
                                <input
                                    type="text"
                                    value={IDcard}
                                    onChange={(e) => setIDcard(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>



                            {/* currency */}
                            <div>
                                <label className="block font-bold ">واحدپول</label>
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

                            {/* amount */}
                            <div>
                                <label className="p-2">مبلغ</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* currentBrnch */}

                            <div>
                                <label className="block font-bold ">ازنمایندگی</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenCurrentBranch(!openCurrentBranch)}
                                    >
                                        <span>{currentBranch}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openCurrentBranch && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="text"
                                                onChange={(e) => setCurrentBranch(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {brachList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setCurrentBranch(opt);
                                                        setOpenCurrentBranch(false);
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

                            {/* toBranch */}
                            <div>
                                <label className="block font-bold ">به نمایندگی</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenToBranch(!openToBranch)}
                                    >
                                        <span>{toBranch}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openToBranch && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="text"
                                                onChange={(e) => setToBranch(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {brachList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setToBranch(opt);
                                                        setOpenToBranch(false);
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

                            {/* amountRate */}
                            <div>
                                <label className="">مقدار کمیشن</label>
                                <input
                                    type="number"
                                    value={amountRate}
                                    onChange={(e) => setAmountRate(e.target.value ? parseInt(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* currencyRate */}
                            <div>
                                <label className="block font-bold ">واحید کمیشن</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenCurrencyRate(!openCurrencyRate)}
                                    >
                                        <span>{currencyRate}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openCurrencyRate && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                type="number"
                                                onChange={(e) => setCurrencyRate(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {selectCurrency.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setCurrencyRate(opt);
                                                        setOpenCurrencyRate(false);
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

                            {/* explain */}
                            <div>
                                <label className="p-2">جزیات</label>
                                <input
                                    type="text"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* date */}
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

