







// my code accordding to rodeMap but mortaza created deffrint table and now this don't match
//
// import { useState } from "react";
// import { MdArrowDropDown } from "react-icons/md";

// interface exchangeType {
//     isOpen: boolean,
//     onClose: () => void;
// }

// export default function Hawala({ isOpen, onClose }: exchangeType) {
//     const [openFromCurrency, setOpenFromCurrency] = useState(false)
//     const [openCurrentBranch, setOpenCurrentBranch] = useState(false)
//     const [openToBranch, setOpenToBranch] = useState(false)
//     const [openCommissionCurrency, setOpenCommissionCurrency] = useState(false)
//     const [commissionCurrency, setCommissionCurrency] = useState("");

//     const [Currency, setCurrency] = useState("");
//     const [currentBranch, setCurrentBranch] = useState("");
//     const [toBranch, setToBranch] = useState("");



//     const [amountMoney, setAmountMoney] = useState<number | "">("");
//     const [voucherNumber, setVoucherNumber] = useState<string | "">("");
//     const [senderName, setSender] = useState<string | "">("");
//     const [senderLastName, setSenderLastName] = useState<string | "">("");
//     const [senderPhoneNumber, setSenderPhoneNumber] = useState<number | "">("");
//     const [receiverName, setReceiverName] = useState<string | "">("");
//     const [receiverLastName, setReceiverLastName] = useState<string | "">("");
//     const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<number | "">("");
//     const [receiverIdCard, setReceiverIdCard] = useState<string | "">("");
//     const [receiverAddress, setReceiverAddress] = useState<string | "">("");
//     const [senderIdCard, setSenderIdCard] = useState<string | "">("");
//     const [amountCommission, setAmountCommission] = useState<number | "">("")
//     const [comment, setComment] = useState<string>("");
//     const [date, setDate] = useState<string>("");

//     const [openStatus, setOpenSatatus] = useState<boolean>(false);
//     const [status, setStatus] = useState<string>("pendding")


//     const selectCurrency = ["دالر", "کلدار", "افغانی", "درهم", "یورو"];
//     const statusList = ["pendding", "approved", "reject"]
//     const brachList = ["Qandahar", "Kabul", "Khairkhana"]

//     if (!isOpen) return null;

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const hawalaFormData = {
//             Currency,
//             currentBranch,
//             toBranch,
//             voucherNumber,
//             senderName,
//             senderLastName,
//             receiverName,
//             receiverLastName,
//             senderPhoneNumber,
//             receiverPhoneNumber,
//             receiverIdCard,
//             receiverAddress,
//             senderIdCard,
//             amountCommission,
//             commissionCurrency,
//             comment,
//             amountMoney,
//             date,
//         };

//         try {
//             const res = await fetch("http://localhost:8000/api/voucher", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(hawalaFormData),
//             });

//             if (!res.ok) {
//                 throw new Error("Failed to submit exchange rate");
//             }

//             const data = await res.json();
//             console.log("✅ Success:", data);
//             alert(data.message)
//             onClose();
//         } catch (error) {
//             console.error(" Error:", error);
//         }
//     };



//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-varWhite rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">

//                 <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
//                     <h2 className="text-lg font-semibold">ارسال حواله</h2>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-600 hover:text-red-500 text-xl"
//                     >
//                         ✕
//                     </button>
//                 </div>

//                 {/* Scl */}
//                 <div className="overflow-y-auto flex-1 p-6">
//                     <form onSubmit={handleSubmit}>
//                         <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">




//                             {/* hawalaNumber */}
//                             <div>
//                                 <label className="p-2">شماره حواله</label>
//                                 <input
//                                     name="voucherNumber"
//                                     type="text"
//                                     value={voucherNumber}
//                                     onChange={(e) => setVoucherNumber(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>


//                             {/* sender */}
//                             <div>
//                                 <label className="p-2">فرستنده</label>
//                                 <input
//                                     name="senderName"
//                                     type="text"
//                                     value={senderName}
//                                     onChange={(e) => setSender(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="p-2">لقب فرستنده</label>
//                                 <input
//                                     name="senderLastName"
//                                     type="text"
//                                     value={senderLastName}
//                                     onChange={(e) => setSenderLastName(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* SenderPhone */}
//                             <div>
//                                 <label className="p-2">نمبر تماس فرستنده</label>
//                                 <input
//                                     name="senderPoneNumber"
//                                     type="number"
//                                     value={senderPhoneNumber}
//                                     onChange={(e) => setSenderPhoneNumber(e.target.value ? parseInt(e.target.value) : "")}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* senderIdCard */}
//                             <div>
//                                 <label className="p-2">نمبر تذکره فرستنده</label>
//                                 <input
//                                     name="senderIdCard"
//                                     type="text"
//                                     value={senderIdCard}
//                                     onChange={(e) => setSenderIdCard(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>


//                             {/* resiver name */}
//                             <div>
//                                 <label className="p-2">گیرنده</label>
//                                 <input
//                                     name="receiverName"
//                                     type="text"
//                                     value={receiverName}
//                                     onChange={(e) => setReceiverName(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* receiverLastName */}
//                             <div>
//                                 <label className="p-2">لقب گیرنده</label>
//                                 <input
//                                     name="receiverLastName"
//                                     type="text"
//                                     value={receiverLastName}
//                                     onChange={(e) => setReceiverLastName(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>


//                             {/* resiverPhone */}
//                             <div>
//                                 <label className="p-2">نمبر تماس گیرنده</label>
//                                 <input
//                                     name="receiverPhoneNumber"
//                                     type="number"
//                                     value={receiverPhoneNumber}
//                                     onChange={(e) => setReceiverPhoneNumber(e.target.value ? parseInt(e.target.value) : "")}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* resiverIDcard */}
//                             <div>
//                                 <label className="p-2">نمبر تذکره</label>
//                                 <input
//                                     name="receiverIdCard"
//                                     type="text"
//                                     value={receiverIdCard}
//                                     onChange={(e) => setReceiverIdCard(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* receiverAddress */}
//                             <div>
//                                 <label className="p-2">آدرس گیرنده</label>
//                                 <input
//                                     name="receiverAddress"
//                                     type="text"
//                                     value={receiverAddress}
//                                     onChange={(e) => setReceiverAddress(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>



//                             {/* currency */}
//                             <div>
//                                 <label className="block font-bold ">واحدپول</label>
//                                 <div className="relative">
//                                     <div
//                                         className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                         onClick={() => setOpenFromCurrency(!openFromCurrency)}
//                                     >
//                                         <span>{Currency}</span>
//                                         <MdArrowDropDown />
//                                     </div>
//                                     {openFromCurrency && (
//                                         <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
//                                             <input
//                                                 name="currency"
//                                                 type="text"
//                                                 onChange={(e) => setCurrency(e.target.value)}
//                                                 className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
//                                             />
//                                             {selectCurrency.map((opt) => (
//                                                 <div
//                                                     key={opt}
//                                                     onClick={() => {
//                                                         setCurrency(opt);
//                                                         setOpenFromCurrency(false);
//                                                     }}
//                                                     className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                                 >
//                                                     {opt}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* amount */}
//                             <div>
//                                 <label className="p-2">مبلغ</label>
//                                 <input
//                                     name="amountMoney"
//                                     type="number"
//                                     value={amountMoney}
//                                     onChange={(e) => setAmountMoney(e.target.value ? parseFloat(e.target.value) : "")}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>


//                             {/* currentBrnch */}

//                             <div>
//                                 <label className="block font-bold ">ازنمایندگی</label>
//                                 <div className="relative">
//                                     <div
//                                         className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                         onClick={() => setOpenCurrentBranch(!openCurrentBranch)}
//                                     >
//                                         <span>{currentBranch}</span>
//                                         <MdArrowDropDown />
//                                     </div>
//                                     {openCurrentBranch && (
//                                         <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
//                                             <input
//                                                 name="currentBranch"
//                                                 type="text"
//                                                 onChange={(e) => setCurrentBranch(e.target.value)}
//                                                 className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
//                                             />
//                                             {brachList.map((opt) => (
//                                                 <div
//                                                     key={opt}
//                                                     onClick={() => {
//                                                         setCurrentBranch(opt);
//                                                         setOpenCurrentBranch(false);
//                                                     }}
//                                                     className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                                 >
//                                                     {opt}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* toBranch */}
//                             <div>
//                                 <label className="block font-bold ">به نمایندگی</label>
//                                 <div className="relative">
//                                     <div
//                                         className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                         onClick={() => setOpenToBranch(!openToBranch)}
//                                     >
//                                         <span>{toBranch}</span>
//                                         <MdArrowDropDown />
//                                     </div>
//                                     {openToBranch && (
//                                         <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
//                                             <input
//                                                 name="toBranch"
//                                                 type="text"
//                                                 onChange={(e) => setToBranch(e.target.value)}
//                                                 className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
//                                             />
//                                             {brachList.map((opt) => (
//                                                 <div
//                                                     key={opt}
//                                                     onClick={() => {
//                                                         setToBranch(opt);
//                                                         setOpenToBranch(false);
//                                                     }}
//                                                     className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                                 >
//                                                     {opt}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* amountCommission */}
//                             <div>
//                                 <label className="">مقدار کمیشن</label>
//                                 <input
//                                     name="commission"
//                                     type="number"
//                                     value={amountCommission}
//                                     onChange={(e) => setAmountCommission(e.target.value ? parseInt(e.target.value) : "")}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>


//                             {/* commeission currency */}
//                             <div>
//                                 <label className="block font-bold ">واحید کمیشن</label>
//                                 <div className="relative">
//                                     <div
//                                         className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                         onClick={() => setOpenCommissionCurrency(!openCommissionCurrency)}
//                                     >
//                                         <span>{commissionCurrency}</span>
//                                         <MdArrowDropDown />
//                                     </div>
//                                     {openCommissionCurrency && (
//                                         <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
//                                             <input
//                                                 name="commissionCurrency"
//                                                 type="number"
//                                                 onChange={(e) => setCommissionCurrency(e.target.value)}
//                                                 className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
//                                             />
//                                             {selectCurrency.map((opt) => (
//                                                 <div
//                                                     key={opt}
//                                                     onClick={() => {
//                                                         setCommissionCurrency(opt);
//                                                         setOpenCommissionCurrency(false);
//                                                     }}
//                                                     className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                                 >
//                                                     {opt}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>


//                             {/* comment */}
//                             <div>
//                                 <label className="p-2">جزیات</label>
//                                 <input
//                                     name="comment"
//                                     type="text"
//                                     value={comment}
//                                     onChange={(e) => setComment(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                             {/* status */}
//                             <div>
//                                 <label className="block font-bold ">حالت حواله</label>
//                                 <div className="relative">
//                                     <div
//                                         className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
//                                         onClick={() => setOpenSatatus(!openStatus)}
//                                     >
//                                         <span>{status}</span>
//                                         <MdArrowDropDown />
//                                     </div>
//                                     {openStatus && (
//                                         <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
//                                             <input
//                                                 name="status"
//                                                 type="text"
//                                                 onChange={(e) => setStatus(e.target.value)}
//                                                 className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
//                                             />
//                                             {statusList.map((opt) => (
//                                                 <div
//                                                     key={opt}
//                                                     onClick={() => {
//                                                         setStatus(opt);
//                                                         setOpenSatatus(false);
//                                                     }}
//                                                     className="p-2 hover:bg-formSelectHover cursor-pointer"
//                                                 >
//                                                     {opt}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* date */}
//                             <div>
//                                 <label className="p-2">تاریخ</label>
//                                 <input
//                                     name="date"
//                                     type="date"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                     className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
//                                 />
//                             </div>

//                         </div>

//                         <div className="mt-6 flex justify-end">
//                             <button
//                                 type="submit"
//                                 className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

