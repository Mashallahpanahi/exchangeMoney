

import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

interface BranchType {
    branchName: string,
    id: number

}

export default function Hawala({ isOpen, onClose }: exchangeType) {
    const [openFromCurrency, setOpenFromCurrency] = useState(false)
    const [currency, setCurrency] = useState("");
    const [amountMoney, setAmountMoney] = useState<number | "">("");
    const [voucherNumber, setVoucherNumber] = useState<string | "">("");
    const [senderName, setSender] = useState<string | "">("");
    const [senderLastName, setSenderLastName] = useState<string | "">("");
    const [senderPhoneNumber, setSenderPhoneNumber] = useState<string | "">("");
    const [senderAddress, setSenderAddress] = useState<string | "">("");
    const [receiverName, setReceiverName] = useState<string | "">("");
    const [receiverLastName, setReceiverLastName] = useState<string | "">("");
    const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<string | "">("");
    const [receiverIdCard, setReceiverIdCard] = useState<string | "">("");
    const [receiverAddress, setReceiverAddress] = useState<string | "">("");
    const [receiverLocation, setReceiverLocation] = useState<string | ''>("");
    const [senderLocation, setSenderLocation] = useState<string | ''>("");


    const [senderIdCard, setSenderIdCard] = useState<string | "">("");
    const [comment, setComment] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [openStatus, setOpenSatatus] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("pendding")



    const [branch_id, setBranch_id] = useState<number>(1)
    const [customerType, setCustomerType] = useState("موقت")
    const [openCustomerType, setOpenCustomerType] = useState<boolean>(false)
    const [commission, setCommission] = useState<string>("");

    const selectCurrency = ["دالر", "کلدار", "افغانی"];
    const statusList = ["pendding", "approved", "reject"];
    const TypeOfCustomer = ["دایم", "موفت"]
    const [loading, setLoading] = useState<boolean>(true);

    const [branches, setBranches] = useState<BranchType[]>([]);



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

        if (isOpen) {
            fetchCustomers();
        }
    }, [isOpen]);


    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const hawalaFormData = {
            date,
            customerType,
            amountMoney,
            voucherNumber,
            currency,
            comment,
            commission,
            receiverIdCard,
            receiverAddress,
            receiverPhoneNumber,
            receiverLastName,
            receiverName,
            senderName,
            senderLastName,
            senderPhoneNumber,
            senderAddress,
            branch_id,
            status,
            senderLocation,
            receiverLocation,
            senderIdCard
        };


        try {
            const res = await fetch("http://localhost:8000/api/voucher", {
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
            alert(data.message)
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
                                    name="voucherNumber"
                                    type="text"
                                    value={voucherNumber}
                                    onChange={(e) => setVoucherNumber(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* sender */}
                            <div>
                                <label className="p-2">فرستنده</label>
                                <input
                                    name="senderName"
                                    type="text"
                                    value={senderName}
                                    onChange={(e) => setSender(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="p-2">لقب فرستنده</label>
                                <input
                                    name="senderLastName"
                                    type="text"
                                    value={senderLastName}
                                    onChange={(e) => setSenderLastName(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* SenderPhone */}
                            <div>
                                <label className="p-2">نمبر تماس فرستنده</label>
                                <input
                                    name="senderPoneNumber"
                                    type="text"
                                    value={senderPhoneNumber}
                                    onChange={(e) => setSenderPhoneNumber(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* senderIdCard */}
                            <div>
                                <label className="p-2">نمبر تذکره فرستنده</label>
                                <input
                                    name="senderIdCard"
                                    type="text"
                                    value={senderIdCard}
                                    onChange={(e) => setSenderIdCard(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            <div>
                                <label className="p-2">آدرس فرستنده</label>
                                <input
                                    name="senderAddress"
                                    type="text"
                                    value={senderAddress}
                                    onChange={(e) => setSenderAddress(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>
                            {/* senderLocation */}
                            <div>
                                <label className="p-2">موقیت فرستنده</label>
                                <input
                                    name="senderLocation"
                                    type="text"
                                    value={senderLocation}
                                    onChange={(e) => setSenderLocation(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* receiverLocation */}
                            <div>
                                <label className="p-2">موقیت گیرنده</label>
                                <input
                                    name="receiverLoation"
                                    type="text"
                                    value={receiverLocation}
                                    onChange={(e) => setReceiverLocation(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* resiver name */}
                            <div>
                                <label className="p-2">گیرنده</label>
                                <input
                                    name="receiverName"
                                    type="text"
                                    value={receiverName}
                                    onChange={(e) => setReceiverName(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* receiverLastName */}
                            <div>
                                <label className="p-2">لقب گیرنده</label>
                                <input
                                    name="receiverLastName"
                                    type="text"
                                    value={receiverLastName}
                                    onChange={(e) => setReceiverLastName(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* resiverPhone */}
                            <div>
                                <label className="p-2">نمبر تماس گیرنده</label>
                                <input
                                    name="receiverPhoneNumber"
                                    type="text"
                                    value={receiverPhoneNumber}
                                    onChange={(e) => setReceiverPhoneNumber(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* resiverIDcard */}
                            <div>
                                <label className="p-2">نمبر تذکره گیرنده</label>
                                <input
                                    name="receiverIdCard"
                                    type="text"
                                    value={receiverIdCard}
                                    onChange={(e) => setReceiverIdCard(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* receiverAddress */}
                            <div>
                                <label className="p-2">آدرس گیرنده</label>
                                <input
                                    name="receiverAddress"
                                    type="text"
                                    value={receiverAddress}
                                    onChange={(e) => setReceiverAddress(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* branches */}
                            <div className="">
                                <label className="block font-bold ">نمایندگی ها</label>
                                <select
                                    name="user_id"
                                    value={branch_id || ""}
                                    onChange={(e) => setBranch_id(Number(e.target.value))}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    required
                                >
                                    {branches.map((brand) => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.branchName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* currency */}
                            <div>
                                <label className="block font-bold ">واحدپول</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenFromCurrency(!openFromCurrency)}
                                    >
                                        <span>{currency}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openFromCurrency && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                name="currency"
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
                                    name="amountMoney"
                                    type="number"
                                    value={amountMoney}
                                    onChange={(e) => setAmountMoney(e.target.value ? parseFloat(e.target.value) : "")}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/* amountCommission */}
                            <div>
                                <label className="">مقدار کمیشن</label>
                                <input
                                    name="commission"
                                    type="number"
                                    value={commission}
                                    onChange={(e) => setCommission(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* comment */}
                            <div>
                                <label className="p-2">جزیات</label>
                                <input
                                    name="comment"
                                    type="text"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>

                            {/* status */}
                            <div>
                                <label className="block font-bold ">حالت حواله</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenSatatus(!openStatus)}
                                    >
                                        <span>{status}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openStatus && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                name="status"
                                                type="text"
                                                onChange={(e) => setStatus(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {statusList.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setStatus(opt);
                                                        setOpenSatatus(false);
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
                                <label className="p-2">تاریخ</label>
                                <input
                                    name="date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                />
                            </div>


                            {/*customerType */}
                            <div>
                                <label className="block font-bold ">نوع مشتری</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenCustomerType(!openCustomerType)}
                                    >
                                        <span>{customerType}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openCustomerType && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                name="customerType"
                                                type="text"
                                                onChange={(e) => setCustomerType(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {TypeOfCustomer.map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        setCustomerType(opt);
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















