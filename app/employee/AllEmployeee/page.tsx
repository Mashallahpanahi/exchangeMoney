

'use client'

import axios from "axios"
import { error } from "console"
import Link from "next/link";
import { useEffect, useState } from "react"
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";


export interface employeeType {
    id: number,
    name: string,
    lastName: string,
    fatherName: string,
    phoneNumber: string,
    salary: string,
    address: string,
    date: string
}
export default function AllEmployee() {
    const [AllEmployee, setAllEmployee] = useState<employeeType[] | null>(null)

    useEffect(() => {
        fetchEmployee()
    }, [])

    const fetchEmployee = async () => {
        try {
            const res = await axios.get<employeeType[]>("http://localhost:8000/api/employee")
            const result: employeeType[] = res.data
            if (!res) {
                throw new Error("failed to fetch Employee")
            }
            setAllEmployee(result)
        } catch (error) {
            console.error("Error fetching customers:", error)
        }
    }

    const handleDelete = async (id: number, name: string, lastName: string) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${name} ${lastName}?`)

        if (!isConfirmed) {
            return
        }

        try {

            await axios.delete(`http://localhost:8000/api/employee/${id}`)

            setAllEmployee(prev => prev?.filter(customer => customer.id !== id) || null)

            console.log(`Customer ${id} deleted successfully`)

        } catch (error) {
            console.error("Error deleting customer:", error)
            alert("Failed to delete customer. Please try again.")
        }
    }

    return (
        <div>
            <table className="border border-black text-center w-full">
                <thead>
                    <tr>
                        <th className="p-2 text-white bg-black border border-black">Name</th>
                        <th className="p-2 text-white bg-black border border-black">LastName</th>
                        <th className="p-2 text-white bg-black border border-black">FatherName</th>
                        <th className="p-2 text-white bg-black border border-black">Phone</th>
                        <th className="p-2 text-white bg-black border border-black">Addrress</th>
                        <th className="p-2 text-white bg-black border border-black">Salary</th>
                        <th className="p-2 text-white bg-black border border-black">Date</th>
                        <th className="p-2 text-white bg-black border border-black">Edit</th>
                        <th className="p-2 text-white bg-black border border-black">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {AllEmployee?.map((i) => (
                        <tr key={i.id} className={`border border-black odd:bg-gray-200 even:bg-white text-center`}>
                            <td className="p-2 border border-black font-semibold">{i.name}</td>
                            <td className="border border-black font-semibold">{i.lastName}</td>
                            <td className="border border-black font-semibold">{i.fatherName}</td>
                            <td className="border border-black font-semibold">{i.phoneNumber}</td>
                            <td className="border border-black font-semibold">{i.address}</td>
                            <td className="border border-black font-semibold">{i.salary}</td>
                            <td className="border border-black font-semibold">{i.date}</td>
                            <td className="border border-black font-semibold">
                                <Link
                                    href={`/employee/AllEmployeee/${i.id}`}
                                    className="flex items-center justify-center"
                                >
                                    <CiEdit className="text-2xl text-blue-500" />
                                </Link>
                            </td>
                            <td className="border border-black font-semibold">
                                <button
                                    onClick={() => handleDelete(i.id, i.name, i.lastName)}
                                    className="flex items-center justify-center w-full"
                                >
                                    <MdDeleteForever className="text-red-500 text-[25px]" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <Link href={'/dashboard'}>
                    <button className="bg-green-300 p-2 rounded-md font-semibold w-56 hover:bg-green-600">Dashboard</button>
                </Link>
            </div>
        </div>
    )
}











