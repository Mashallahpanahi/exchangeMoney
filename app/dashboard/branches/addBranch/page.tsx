

"use client";

import { useState } from "react";

export default function AddBranchPage() {

    const [formData, setFormData] = useState({
        branchName: "",
        branchCity: "",
        branchManager: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8000/api/Branch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });


            if (res.ok) {
                alert("Branch added successfully ✅");
                setFormData({ branchName: "", branchCity: "", branchManager: "" });
            } else {
                alert("Failed to add branch ");
            }
        } catch (error) {
            console.error(error);
            alert(`Error while sending data ${error} `);
        }
    };

    return (
        <div className="flex justify-center items-center mx-auto mt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full "
            >
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Add New Branch
                </h1>


                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Branch Name</label>
                    <input
                        type="text"
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Branch City</label>
                    <input
                        type="text"
                        name="branchCity"
                        value={formData.branchCity}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Branch Manager</label>
                    <input
                        type="text"
                        name="branchManager"
                        value={formData.branchManager}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 "
                >
                    Save Branch
                </button>
            </form>
        </div>
    );
}





