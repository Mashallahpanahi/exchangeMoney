
import { ChangeEvent, useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface exchangeType {
    isOpen: boolean,
    onClose: () => void;
}

const slectCustomer: string[] = ["دایمی", "موقت"]

export default function AddCustomer({ isOpen, onClose }: exchangeType) {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [job, setJob] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [idCard, setIdCard] = useState("")

    const [openCutomberType, setOpenCustomerType] = useState(false);
    const [customerType, setCustomerType] = useState("")






    if (!isOpen) return null;






    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const CustomerInfo = {
            name,
            lastName,
            job,
            address,
            phoneNumber,
            idCard,
            customerType



        };

        try {
            const res = await fetch("http://localhost:8000/api/Customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(CustomerInfo),
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
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto flex-1 p-6">


                            <div>
                                <label >Name:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label >Last name:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label >Job:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="job"
                                    onChange={(e) => setJob(e.target.value)}
                                />
                            </div>

                            <div>
                                <label >Address:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div>
                                <label >phone:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="phoneNumber"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <div>
                                <label >ID card:</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                    name="idCard"
                                    onChange={(e) => setIdCard(e.target.value)}
                                />
                            </div>


                            <div>
                                <label className="block font-bold ">customer type:</label>
                                <div className="relative">
                                    <div
                                        className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                        onClick={() => setOpenCustomerType(!openCutomberType)}
                                    >
                                        <span>{customerType}</span>
                                        <MdArrowDropDown />
                                    </div>
                                    {openCutomberType && (
                                        <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                            <input
                                                required
                                                name="customerType"
                                                type="text"
                                                onChange={(e) => setCustomerType(e.target.value)}
                                                className="bg-formSelectBg p-2 w-full rounded-sm border-none focus:ring-0 outline-none sticky top-0"
                                            />
                                            {slectCustomer.map((opt) => (
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
        </div>
    );
}



