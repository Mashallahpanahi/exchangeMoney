
import { ChangeEvent, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

export default function Exchanges({ isOpen, onClose }: exchangeType) {

    const [rate, setRate] = useState<string>("");
    const [amountMoney, setAmountMoney] = useState<string>("");
    const [buy_rate, setBuyRate] = useState<string>("")
    const [sell_rate, setSellRate] = useState<string>("")
    const [exchangeWith, setExchangeWith] = useState<string>("")
    const [exchangeWithPhoneNumber, setExchangeWithPhoneNumber] = useState<string>("")


    useEffect(
        function () {
            function showResult() {
                if (change == "division") {
                    let r: number = parseFloat(amountMoney) / parseFloat(rate)
                    setResultOffInput(r.toString())
                }
                else {
                    let r: number = parseFloat(amountMoney) * parseFloat(rate)
                    setResultOffInput(r.toString())
                }
            }
            showResult()

        }, [rate])


    const [resultOffInput, setResultOffInput] = useState<string>();
    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const [openToCurrency, setOpenToCurrency] = useState(false)
    const [openChangeType, setOpenChangeType] = useState(false)


    const [fromCurrency, setFromCurrency] = useState("دالر");
    const [toCurrency, setToCurrency] = useState("دالر");
    const [change, setChange] = useState<string>("division");
    const [date, setDate] = useState<string>("");
    const [user_id, setUser_id] = useState<number>(1);




    const selectCurrency = ["دالر", "کلدار", "افغانی", "تومن"];
    const slectChangeType = ["division", "multiply"]

    if (!isOpen) return null;






    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            fromCurrency,
            toCurrency,
            change,
            rate,
            amountMoney,
            sell_rate,
            buy_rate,
            exchangeWith,
            exchangeWithPhoneNumber,
            date,
            user_id: 1,
        };

        try {
            const res = await fetch("http://localhost:8000/api/exchangeRate", {
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
                    <h2 className="text-lg font-semibold">تبدیل ارز</h2>
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
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto flex-1 p-6">


                            <div>
                                <label className="block font-bold p-2">از ارزی</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenFromCurrency(!openFromCurrency)}
                                    >
                                        <span>{fromCurrency}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openFromCurrency && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                            <input
                                                required
                                                name="fromCurrency"
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
                                <label className="block font-bold p-2">به ارز </label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenToCurrency(!openToCurrency)}
                                    >
                                        <span>{toCurrency}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openToCurrency && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                            <input
                                                required
                                                name="toCurrency"
                                                type="text"
                                                onChange={(e) => setToCurrency(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                            />
                                            {selectCurrency.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setToCurrency(opt);
                                                        setOpenToCurrency(false);
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
                                <label className="block font-bold p-2">ضرب یا تقسیم؟</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenChangeType(!openChangeType)}
                                    >
                                        <span>{change}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openChangeType && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
                                            <input
                                                required
                                                name="change"
                                                type="text"
                                                onChange={(e) => setChange(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                            />
                                            {slectChangeType.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setChange(opt);
                                                        setOpenChangeType(false);
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
                                <label className="p-2 z-100">مقدار</label>
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
                                <label className="p-2 z-100">نرخ</label>
                                <input
                                    required
                                    type="number"
                                    name="rate"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>
                            <div>
                                <label className="p-2 z-100">نرخ خرید </label>
                                <input
                                    required
                                    name="buy_rate"
                                    type="number"
                                    value={buy_rate}
                                    onChange={(e) => setBuyRate(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>
                            <div>
                                <label className="p-2 z-100">نرخ فروش</label>
                                <input
                                    required
                                    name="sell_rate"
                                    type="number"
                                    value={sell_rate}
                                    onChange={(e) => setSellRate(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>



                            <div>
                                <label className="p-2 z-100">توسط</label>
                                <input
                                    required
                                    name="exchangeWith"
                                    type="text"
                                    value={exchangeWith}
                                    onChange={(e) => setExchangeWith(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div> <div>
                                <label className="p-2 z-100">شماره تماس</label>
                                <input
                                    required
                                    name="exchangeWithPhoneNumber"
                                    type="number"
                                    value={exchangeWithPhoneNumber}
                                    onChange={(e) => setExchangeWithPhoneNumber(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                />
                            </div>


                            <div>
                                <h1>نتیجه تبدیل</h1>
                                <h1 className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100">{resultOffInput}</h1>
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
                                // onClick={showResult}
                                type="submit"
                                className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder "
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





