
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

export default function Exchanges({ isOpen, onClose }: exchangeType) {
    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const [openToCurrency, setOpenToCurrency] = useState(false)
    const [openChangeType, setOpenChangeType] = useState(false)


    const [fromCurrency, setFromCurrency] = useState("دالر");
    const [toCurrency, setToCurrency] = useState("دالر");
    const [change, setChange] = useState("division");
    const [rate, setRate] = useState<number | "">("");
    const [amount, setAmount] = useState<number | "">("");
    const [date, setDate] = useState<string>("");

    const options = ["نفد", "حساب", "بانک"];
    const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
    const slectChangeType = ["division", "multiply"]

    if (!isOpen) return null;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            fromCurrency,
            toCurrency,
            changeType: change,
            rate,
            amount,
            date,
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

            onClose();
        } catch (error) {
            console.error(" Error:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-varWhite rounded-lg shadow-lg p-6 w-full relative m-10">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                >
                    ✕
                </button>

                <h2 className="text-lg font-semibold mb-4">Exchange Entry</h2>


                <form onSubmit={handleSubmit}>
                    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">


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
                            <label className="p-2 z-100">نرخ</label>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value ? parseFloat(e.target.value) : "")}
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                            />
                        </div>


                        <div>
                            <label className="p-2 z-100">مقدار</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                            />
                        </div>


                        <div>
                            <label className="p-2 z-100">تاریخ</label>
                            <input
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
                            className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder "
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



















// exchange code with backend error
// import { useState } from "react";
// import { MdArrowDropDown } from "react-icons/md";

// interface exchangeType {
//     isOpen: boolean,
//     onClose: () => void;
// }

// export default function Exchanges({ isOpen, onClose }: exchangeType) {
//     const [openFromCurrency, setOpenFromCurrency] = useState(false)
//     const [openToCurrency, setOpenToCurrency] = useState(false)
//     const [openChangeType, setOpenChangeType] = useState(false)


//     const [fromCurrency, setFromCurrency] = useState("دالر");
//     const [toCurrency, setToCurrency] = useState("دالر");
//     const [change, setChange] = useState("division");
//     const [rate, setRate] = useState<number | "">("");
//     const [amount, setAmount] = useState<number | "">("");
//     const [date, setDate] = useState<string>("");

//     const options = ["نفد", "حساب", "بانک"];
//     const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
//     const slectChangeType = ["division", "multiply"]

//     if (!isOpen) return null;


//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const payload = {
//             fromCurrency,
//             toCurrency,
//             changeType: change,
//             rate,
//             amount,
//             date,
//         };

//         try {
//             const res = await fetch("http://localhost:8000/api/exchangeRate", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (!res.ok) {
//                 throw new Error("Failed to submit exchange rate");
//             }

//             const data = await res.json();
//             console.log("✅ Success:", data);

//             onClose();
//         } catch (error) {
//             console.error(" Error:", error);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-varWhite rounded-lg shadow-lg p-6 w-full relative m-10">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//                 >
//                     ✕
//                 </button>

//                 <h2 className="text-lg font-semibold mb-4">Exchange Entry</h2>


//                 <form onSubmit={handleSubmit}>
//                     <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">


//                         <div>
//                             <label className="block font-bold p-2">از ارزی</label>
//                             <div className="relative">
//                                 <div
//                                     className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                     onClick={() => setOpenFromCurrency(!openFromCurrency)}
//                                 >
//                                     <span>{fromCurrency}</span>
//                                     <MdArrowDropDown />
//                                 </div>
//                                 {openFromCurrency && (
//                                     <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
//                                         <input
//                                             type="text"
//                                             onChange={(e) => setFromCurrency(e.target.value)}
//                                             className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
//                                         />
//                                         {selectCurrency.map((opt) => (
//                                             <div
//                                                 key={opt}
//                                                 onClick={() => {
//                                                     setFromCurrency(opt);
//                                                     setOpenFromCurrency(false);
//                                                 }}
//                                                 className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                             >
//                                                 {opt}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>


//                         <div>
//                             <label className="block font-bold p-2">به ارز </label>
//                             <div className="relative">
//                                 <div
//                                     className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                     onClick={() => setOpenToCurrency(!openToCurrency)}
//                                 >
//                                     <span>{toCurrency}</span>
//                                     <MdArrowDropDown />
//                                 </div>
//                                 {openToCurrency && (
//                                     <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
//                                         <input
//                                             type="text"
//                                             onChange={(e) => setToCurrency(e.target.value)}
//                                             className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
//                                         />
//                                         {selectCurrency.map((opt) => (
//                                             <div
//                                                 key={opt}
//                                                 onClick={() => {
//                                                     setToCurrency(opt);
//                                                     setOpenToCurrency(false);
//                                                 }}
//                                                 className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                             >
//                                                 {opt}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>


//                         <div>
//                             <label className="block font-bold p-2">ضرب یا تقسیم؟</label>
//                             <div className="relative">
//                                 <div
//                                     className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                     onClick={() => setOpenChangeType(!openChangeType)}
//                                 >
//                                     <span>{change}</span>
//                                     <MdArrowDropDown />
//                                 </div>
//                                 {openChangeType && (
//                                     <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10">
//                                         <input
//                                             type="text"
//                                             onChange={(e) => setChange(e.target.value)}
//                                             className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
//                                         />
//                                         {slectChangeType.map((opt) => (
//                                             <div
//                                                 key={opt}
//                                                 onClick={() => {
//                                                     setChange(opt);
//                                                     setOpenChangeType(false);
//                                                 }}
//                                                 className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                             >
//                                                 {opt}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>


//                         <div>
//                             <label className="p-2 z-100">نرخ</label>
//                             <input
//                                 type="number"
//                                 value={rate}
//                                 onChange={(e) => setRate(e.target.value ? parseFloat(e.target.value) : "")}
//                                 className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
//                             />
//                         </div>


//                         <div>
//                             <label className="p-2 z-100">مقدار</label>
//                             <input
//                                 type="number"
//                                 value={amount}
//                                 onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
//                                 className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
//                             />
//                         </div>


//                         <div>
//                             <label className="p-2 z-100">تاریخ</label>
//                             <input
//                                 type="date"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 className="bg-formInputBg border z-90 border-formInputBorder rounded-md w-full p-2 outline-none"
//                             />
//                         </div>
//                     </div>


//                     <div className="mt-4 flex justify-end">
//                         <button
//                             type="submit"
//                             className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder "
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }















