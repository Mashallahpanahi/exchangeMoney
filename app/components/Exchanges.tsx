import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function Exchanges() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Cash");

    const [showPopup, setShowPopup] = useState(true);

    const options = ["Cash", "Account", "Account Cash", "Bank"];

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full  relative m-10">
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                >
                    ✕
                </button>

                <h2 className="text-lg font-semibold mb-4">Exchange Entry</h2>
                <div className="mb-4">
                    <label className="block font-bold mb-1">Exchange Type</label>
                    <div className="relative">
                        <div
                            className="flex items-center justify-between bg-green-50 border border-green-400 rounded-md p-2 cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            <span>{value}</span>
                            <MdArrowDropDown />
                        </div>
                        {open && (
                            <div className="absolute top-full left-0 w-full bg-purple-100 border border-green-400 rounded-md mt-1 shadow-lg z-10">
                                <input
                                    type="text"
                                    placeholder="Type to filter..."
                                    onChange={(e) => setValue(e.target.value)}
                                    className="bg-purple-50 p-2 w-full rounded-sm border-none focus:ring-0 outline-none"
                                />
                                {options.map((opt) => (
                                    <div
                                        key={opt}
                                        onClick={() => {
                                            setValue(opt);
                                            setOpen(false);
                                        }}
                                        className="p-2 hover:bg-purple-200 cursor-pointer"
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}



