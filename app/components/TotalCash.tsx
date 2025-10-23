
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

export default function TotalCash({ isOpen, onClose }: exchangeType) {
    if (!isOpen) return null;
    const [amountMoney, setAmountMoney] = useState<string>("");
    const [currency, setCurrency] = useState<string>("دالر");
    const [openCurrency, setOpenCurrency] = useState<boolean>(false)
    const [comment, setComment] = useState<string>("");
    const selectCurrency = ["دالر", "کلدار", "افغانی", "تومن"];
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        const totalCashFormData = {
            amountMoney,
            currency,
            comment,
        };

        try {
            const res = await fetch("http://localhost:8000/api/totalCash", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(totalCashFormData),
            });

            if (!res.ok) {
                setLoading(false)
                throw new Error("Failed to submit total_csh");
            }

            const data = await res.json();
            console.log("✅ Success:", data);
            alert(`${data.message}`);
            setLoading(false)
            onClose();
        } catch (error) {
            console.error(" Error:", error);
            console.log(amountMoney)
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
            <div className="bg-varWhite rounded-lg shadow-lg sm:w-full md:w-[600px] h-[400px] overflow-hidden flex flex-col m-4">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-lg font-semibold">دخل</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className=" ">
                    <form onSubmit={handleSubmit} className="h-full">
                        <div className="w-full grid sm:grid-cols-1  gap-4  flex-1 p-6 h-full">

                            {/* currency */}
                            <div>
                                <label className="block font-bold ">واحید پول</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenCurrency(!openCurrency)}
                                    >
                                        <span>{currency}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openCurrency && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                            <input
                                                required
                                                name="currency"
                                                type="text"
                                                onChange={(e) => setCurrency(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                            />
                                            {selectCurrency.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setCurrency(opt);
                                                        setOpenCurrency(false);
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

                            {/* amoutMoney */}
                            <div>
                                <label className="p-2 z-100">مبلغ</label>
                                <input
                                    required
                                    name="amountMoney"
                                    type="number"
                                    onChange={(e) => setAmountMoney(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>

                            {/* comment */}
                            <div>
                                <label className="p-2 z-100">شرح</label>
                                <input
                                    name="comment"
                                    type="text"
                                    onChange={(e) => setComment(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                                disabled={loading}
                            >
                                {loading ? "saving" : "save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}





