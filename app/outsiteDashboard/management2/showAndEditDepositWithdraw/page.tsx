

'use client'
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

export interface depositW {
    id: number,
    date: string,
    transactionType: string,
    customer_id: number,
    currency: string,
    amountMoney: string,
    comment: string
}

export interface Customer {
    id: number,
    name: string,

}

const creditPartHeader = ["customer", "transactionType", "currency", "date", "Edit", "Delete"]

export default function ShowAndEditDepositWithdraw() {
    const [journalData, setJournalData] = useState<depositW[]>([])
    const [creditPart, setCreditPart] = useState<depositW[]>([])
    const [debitPart, setDebitPart] = useState<depositW[]>([])
    const [allCustomer, setAllCustomer] = useState<Customer[]>([])

    useEffect(() => {
        const fetching = async () => {
            try {
                const customerRes = await axios.get<Customer[]>('http://localhost:8000/api/Customer')
                if (!customerRes.data) throw new Error("Failed to fetch customer data")
                setAllCustomer(customerRes.data)


                const journalRes = await axios.get<depositW[]>('http://localhost:8000/api/journal')
                if (!journalRes.data) throw new Error("Failed to fetch journal data")

                setJournalData(journalRes.data)

                const creditData = journalRes.data.filter(item => item.transactionType === 'رسیدگی')
                const debitData = journalRes.data.filter(item => item.transactionType === 'بردگی')
                setCreditPart(creditData)
                setDebitPart(debitData)

            } catch (error) {
                console.error(error)
            }
        }
        fetching()
    }, [])

    // Function to find customer name by ID
    const getCustomerName = (customerId: number): string => {
        const customer = allCustomer.find(customer => customer.id === customerId)
        return customer ? customer.name : `Customer ${customerId}`
    }


    const handleDelete = async (id: number) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete?`)

        if (!isConfirmed) {
            return
        }

        try {

            await axios.delete(`http://localhost:8000/api/journal/${id}`)

            setJournalData(prev => prev?.filter(customer => customer.id !== id) || null)

            console.log(`Customer ${id} deleted successfully`)

        } catch (error) {
            console.error("Error deleting customer:", error)
            alert("Failed to delete customer. Please try again.")
        }
    }


    return (
        <div className="m-2 grid sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Credit Part Table */}
            <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-center">Credit part (رسیدگی)</h2>
                <table className="border border-black  text-center w-full">
                    <thead>
                        <tr>
                            {creditPartHeader.map((header, index) => (
                                <th key={index} className="p-2 text-white bg-black border border-black">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {creditPart.map(item => (
                            <tr key={item.id} className="border border-black">

                                <td className="border border-black">{getCustomerName(item.customer_id)}</td>
                                <td className="border border-black">{item.transactionType}</td>
                                <td className="border border-black">{item.currency}</td>
                                <td className="border border-black">{item.date}</td>
                                <td className="border border-black ">
                                    <Link
                                        href={`/outsiteDashboard/management2/showAndEditDepositWithdraw/${item.id}`}
                                        className="flex items-center justify-center"
                                    >
                                        <CiEdit className="text-2xl text-blue-500" />
                                    </Link>
                                </td>
                                <td className="border border-black">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="flex items-center justify-center w-full"
                                    >
                                        <MdDeleteForever className="text-red-500 text-[25px]" />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {creditPart.length === 0 && (
                    <p className="text-center p-4">No credit transactions found</p>
                )}
            </div>

            {/* Debit Part Table */}
            <div>
                <h2 className="text-xl font-bold mb-4   text-center">Debit part (بردگی)</h2>
                <table className="border border-black w-full text-center">
                    <thead>
                        <tr>
                            {creditPartHeader.map((header, index) => (
                                <th key={index} className="p-2 text-white bg-black border border-black">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {debitPart.map(item => (
                            <tr key={item.id} className="border border-black">

                                <td className="border border-black">{getCustomerName(item.customer_id)}</td>
                                <td className="border border-black">{item.transactionType}</td>
                                <td className="border border-black">{item.currency}</td>
                                <td className="border border-black">{item.date}</td>
                                <td className="border border-black ">
                                    <Link
                                        href={`/outsiteDashboard/management2/showAndEditDepositWithdraw/${item.id}`}
                                        className="flex items-center justify-center"
                                    >
                                        <CiEdit className="text-2xl text-blue-500" />
                                    </Link>
                                </td>
                                <td className="border border-black">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="flex items-center justify-center w-full"
                                    >
                                        <MdDeleteForever className="text-red-500 text-[25px]" />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {debitPart.length === 0 && (
                    <p className="text-center p-4">No debit transactions found</p>
                )}
            </div>

            <div>
                <Link href={'/dashboard/management'}>
                    <button className="bg-green-300 p-2 rounded-md font-semibold w-56 hover:bg-green-600">Dashboard</button>
                </Link>
            </div>
        </div>
    )
}

















