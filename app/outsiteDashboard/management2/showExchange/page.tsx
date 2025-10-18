'use client'

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";



export interface ExhchangeType {
    amountMoney: string,
    date: string,
    exchangeAmount: string,
    exchangeWith: string,
    exchangeWithPhoneNumber: number,
    fromCurrency: string,
    id: number,
    rate: number,
    toCurrency: string,

}


export default function ShowExchange() {
    const [exchangeData, setExchangeData] = useState<ExhchangeType[]>()



    useEffect(() => {
        const fetching = async () => {
            try {
                const res = await axios.get<ExhchangeType[]>("http://localhost:8000/api/exchangeRate")
                const result: ExhchangeType[] = res.data
                setExchangeData(result)
            } catch (error) {
                console.error(error)
            }
        }

        fetching()
    }, [])


    const handleDelete = (id: number, name: string) => {
        let per = window.confirm(`Are you sure to delete!?${name}`)
        if (per) {
            const delet = axios.delete(`http://localhost:8000/api/exchangeRate/${id}`)
            let newData = exchangeData?.filter((i) => i.id !== id)
            setExchangeData(newData)
        }

    }


    return (
        <div className="">
            <table className="border border-black text-center w-full p-4">
                <thead>
                    <tr >
                        <th className="p-2 text-white bg-black border border-black">Name</th>
                        <th className="p-2 text-white bg-black border border-black">From_currencey</th>
                        <th className="p-2 text-white bg-black border border-black">To_currency</th>
                        <th className="p-2 text-white bg-black border border-black">Amount_Money</th>
                        <th className="p-2 text-white bg-black border border-black">Rate</th>
                        <th className="p-2 text-white bg-black border border-black">Result_ofChange</th>
                        <th className="p-2 text-white bg-black border border-black">Date</th>
                        <th className="p-2 text-white bg-black border border-black">Phone</th>
                        <th className="p-2 text-white bg-black border border-black">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {exchangeData?.map((item) => (
                        <tr key={item.id} className={`border border-black odd:bg-gray-200 even:bg-white text-center`}>
                            <td className="p-2 border border-black font-semibold">{item.exchangeWith}</td>
                            <td className="p-2 border border-black font-semibold">{item.fromCurrency}</td>
                            <td className="p-2 border border-black font-semibold">{item.toCurrency}</td>
                            <td className="p-2 border border-black font-semibold">{item.amountMoney}</td>
                            <td className="p-2 border border-black font-semibold">{item.rate}</td>
                            <td className="p-2 border border-black font-semibold">{item.exchangeAmount}</td>
                            <td className="p-2 border border-black font-semibold">{item.date}</td>
                            <td className="p-2 border border-black font-semibold">{item.exchangeWithPhoneNumber}</td>

                            <td className="p-2 border border-black text-2xl text-red-500  ">
                                <button onClick={() => handleDelete(item.id, item.exchangeWith)}>
                                    < MdDeleteForever className=" mx-auto" />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="m-2">
                <Link href={'/dashboard'}>
                    <button className="bg-green-300 p-2 rounded-md font-semibold w-56 hover:bg-green-600">Dashboard</button>
                </Link>
            </div>
        </div>
    )
}