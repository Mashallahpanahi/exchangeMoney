

'use client'

import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MdArrowDropDown } from "react-icons/md";
import { customerType2 } from "../page";



export default function Customer_id() {
    const param = useParams()
    const id = param.customerID as string
    const router = useRouter()

    const [customerInfo, setCustomerInfo] = useState<customerType2 | null>(null)
    const [loading, setLoading] = useState(true)

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [job, setJob] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [idCard, setIdCard] = useState("")
    const slectCustomer: string[] = ["دایم", "موقت"]

    const [openCutomberType, setOpenCustomerType] = useState(false);
    const [customerType, setCustomerType] = useState("")

    useEffect(() => {
        const fatching = async () => {
            try {
                setLoading(true)
                const res = await axios.get<customerType2[]>(`http://localhost:8000/api/Customer/`)
                const result: customerType2[] = res.data
                const customer = result.find((i) => i.id === parseInt(id))

                if (customer) {
                    setCustomerInfo(customer)

                    setName(customer.name)
                    setLastName(customer.lastName)
                    setJob(customer.job)
                    setAddress(customer.address)
                    setPhoneNumber(customer.phoneNumber)
                    setIdCard(customer.idCard)
                    setCustomerType(customer.customerType)
                }
            } catch (error) {
                console.error("Error fetching customer:", error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fatching()
        }
    }, [id])

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

            const res = await fetch(`http://localhost:8000/api/Customer/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(CustomerInfo),
            });

            if (!res.ok) {
                throw new Error("Failed to update customer");
            }

            const data = await res.json();
            console.log("✅ Success:", data);
            alert(`Customer updated successfully!`);
            router.push('/outsiteDashboard/management2/showAndEditCustomer')

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to update customer");
        }
    };

    if (loading) {
        return <div className="p-6">Loading customer data...</div>
    }

    if (!customerInfo && !loading) {
        return <div className="p-6">Customer not found</div>
    }

    return (
        <div>
            <div className="overflow-y-auto flex-1 p-6">
                <form onSubmit={handleSubmit}>
                    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto flex-1 p-6">
                        <div>
                            <label>Name:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block font-bold">customer type:</label>
                            <div className="relative">
                                <div
                                    className="flex items-center justify-between bg-formInputBg border border-formInputBorder rounded-md p-2 cursor-pointer"
                                    onClick={() => setOpenCustomerType(!openCutomberType)}
                                >
                                    <span>{customerType || "Select customer type"}</span>
                                    <MdArrowDropDown />
                                </div>
                                {openCutomberType && (
                                    <div className="absolute w-full bg-formSelectBg border border-formInputBorder rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                                        <input
                                            required
                                            name="customerType"
                                            type="text"
                                            value={customerType}
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
                        <div>
                            <label>Last name:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Job:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="job"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Address:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>phone:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>ID card:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="idCard"
                                value={idCard}
                                onChange={(e) => setIdCard(e.target.value)}
                            />
                        </div>


                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                        >
                            Update Customer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}




