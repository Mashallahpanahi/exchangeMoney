





"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { branchType } from "../page";

interface BranchData {
    branchName: string;
    branchCity: string;
    branchManager: string;
}

export default function UpdateBranch() {
    const params = useParams();
    const router = useRouter();
    const updateID = params.updateID as string;

    const [branchData, setBranchData] = useState<branchType[]>([]);
    const [targetBranch, setTargetBranch] = useState<branchType | null>(null);

    const [formData, setFormData] = useState({
        branchName: "",
        branchCity: "",
        branchManager: "",
    });

    // ✅ وقتی targetBranch تغییر کرد، formData را پر کن
    useEffect(() => {
        if (targetBranch) {
            setFormData({
                branchName: targetBranch.branchName || "",
                branchCity: targetBranch.branchCity || "",
                branchManager: targetBranch.branchManager || "",
            });
        }
    }, [targetBranch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // ✅ استفاده از updateID در URL به جای "1"
            const res = await fetch(`http://localhost:8000/api/Branch/${updateID}`, {
                method: "PUT", // ✅ اصلاح از "Update" به "PUT"
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Branch updated successfully ✅");
                router.push("/branches"); // ✅ برگشت به صفحه branches
            } else {
                alert("Failed to update branch");
            }
        } catch (error) {
            console.error(error);
            alert(`Error while updating data ${error}`);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<branchType[]>(
                    "http://localhost:8000/api/Branch/"
                );
                setBranchData(response.data);
            } catch (error) {
                console.error("Error fetching branches:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (branchData.length > 0 && updateID) {
            const foundBranch = branchData.find(branch => branch.id === parseInt(updateID));
            setTargetBranch(foundBranch || null);
        }
    }, [branchData, updateID]);

    if (!targetBranch) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center mx-auto mt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full"
            >
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Edit branch
                </h1>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Branch Name</label>
                    <input
                        type="text"
                        name="branchName"
                        value={formData.branchName} // ✅ استفاده از formData به جای targetBranch
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
                        value={formData.branchCity} // ✅ استفاده از formData به جای targetBranch
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
                        value={formData.branchManager} // ✅ استفاده از formData به جای targetBranch
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
                >
                    Update Branch
                </button>
            </form>
        </div>
    );
}








