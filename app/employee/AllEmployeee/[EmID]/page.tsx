



'use client'

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { employeeType } from "../page";




export default function EmployeeEdit() {
    const param = useParams()
    const id = param.EmID as string
    const router = useRouter()

    const [employeeInfo, setEmployeeInfo] = useState<employeeType | null>(null)
    const [loading, setLoading] = useState(true)

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [fatherName, setFatherName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [salary, setSalary] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [date, setDate] = useState<string>("")

    useEffect(() => {
        const fatching = async () => {
            try {
                setLoading(true)
                const res = await axios.get<employeeType[]>("http://localhost:8000/api/employee")
                const result: employeeType[] = res.data
                console.log(result)
                const employee = result.find((i) => i.id === parseInt(id))

                if (employee) {
                    setEmployeeInfo(employee)

                    setName(employee.name)
                    setLastName(employee.lastName)
                    setFatherName(employee.fatherName)
                    setAddress(employee.address)
                    setPhoneNumber(employee.phoneNumber)
                    setSalary(employee.salary)
                    setDate(employee.date)



                }
            } catch (error) {
                console.error("Error fetching employee:", error)
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

        const employeenewData = {
            name,
            lastName,
            fatherName,
            phoneNumber,
            address,
            salary,
            date
        };

        try {

            const res = await fetch(`http://localhost:8000/api/employee/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeenewData),
            });

            if (!res.ok) {
                throw new Error("Failed to update employee");
            }

            const data = await res.json();
            console.log("✅ Success:", data);
            alert(`employee updated successfully!`);
            router.push('/employee/AllEmployeee')

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to update employee");
        }
    };

    if (loading) {
        return <div className="p-6">Loading cemployee data...</div>
    }

    if (!employeeInfo && !loading) {
        return <div className="p-6">employee not found</div>
    }

    return (
        <div>
            <div className="overflow-y-auto flex-1 p-6 ">
                <form onSubmit={handleSubmit}>
                    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto flex-1 p-6 ">
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
                            <label>fotherName:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="lastName"
                                value={fatherName}
                                onChange={(e) => setFatherName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>phone:</label>
                            <input
                                required
                                type="number"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                            <label>salary:</label>
                            <input
                                required
                                type="text"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>date:</label>
                            <input
                                required
                                type="date"
                                className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-buttonColor text-varWhite px-10 py-2 rounded-md hover:bg-formInputBorder"
                        >
                            Update Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}




