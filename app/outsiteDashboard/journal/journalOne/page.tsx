

'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export interface depositW {
    id: number,
    date: string,
    transactionType: string,
    customer_id: number,
    currency: string
    amountMoney: string
}

export interface Customer {
    id: number,
    name: string,

}

const creditPartHeader = ["Id", "customer", "transactionType", "currency", "amountMoney", "date"]

export default function JournalOne() {
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
                                <td className="p-4 border border-black">{item.id}</td>
                                <td className="border border-black">{getCustomerName(item.customer_id)}</td>
                                <td className="border border-black">{item.transactionType}</td>
                                <td className="border border-black">{item.currency}</td>
                                <td className="border border-black">{item.amountMoney}</td>
                                <td className="border border-black">{item.date}</td>
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
                <table className="border border-black w-full">
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
                            <tr key={item.id} className="border border-black text-center">
                                <td className="p-4 border border-black">{item.id}</td>
                                <td className="border border-black">{getCustomerName(item.customer_id)}</td>
                                <td className="border border-black">{item.transactionType}</td>
                                <td className="border border-black">{item.currency}</td>
                                <td className="border border-black">{item.amountMoney}</td>
                                <td className="border border-black">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {debitPart.length === 0 && (
                    <p className="text-center p-4">No debit transactions found</p>
                )}
            </div>
        </div>
    )
}























// 'use client'
// import axios from "axios"
// import { useEffect, useState } from "react"


// export interface depositW {
//     id: number,
//     date: string,
//     transactionType: string,
//     customer_id: number,
//     currency: string
// }

// const creditPartHeader = ["Id", "customer", "transactionType", "currency", "date"]


// export default function JournalOne() {
//     const [journalData, setJournalData] = useState<depositW[]>([])
//     const [creditPart, setCreditPart] = useState<depositW[]>([])
//     const [debitPart, setDebitPart] = useState<depositW[]>([])


//     const [allCustomer, setAllCustomer] = useState();

//     useEffect(() => {
//         const fetching = async () => {
//             try {
//                 const res = await axios.get<depositW[]>('http://localhost:8000/api/journal')
//                 if (!res.data) throw new Error("Failed to fetch journal data")
//                 setJournalData(res.data)

//                 const creditData = res.data.filter(item => item.transactionType === 'رسیدگی')
//                 const debitData = res.data.filter(item => item.transactionType === 'بردگی')
//                 setCreditPart(creditData)
//                 setDebitPart(debitData)

//                 const res1 = await axios.get('http://localhost:8000/api/Customer')
//                 if (!res1) throw new Error("faild to fetch customer")
//                 setAllCustomer(res1.data)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         fetching()
//     }, [])


//     return (
//         <div>
//             {/* Credit Part Table */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-bold mb-4">Credit Transactions (رسیدگی)</h2>
//                 <table className="border border-black w-full">
//                     <thead>
//                         <tr>
//                             {creditPartHeader.map((header, index) => (
//                                 <th key={index} className="p-2 text-white bg-black border border-black">
//                                     {header}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {creditPart.map(item => (
//                             <tr key={item.id} className="border border-black">
//                                 <td className="p-4 border border-black">{item.id}</td>
//                                 <td className="border border-black">{item.customer_id == allCustomer.id ? allCustomer.name : ""}</td>
//                                 <td className="border border-black">{item.transactionType}</td>
//                                 <td className="border border-black">{item.currency}</td>
//                                 <td className="border border-black">{item.date}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 {creditPart.length === 0 && (
//                     <p className="text-center p-4">No credit transactions found</p>
//                 )}
//             </div>

//             {/* Debit Part Table */}
//             <div>
//                 <h2 className="text-xl font-bold mb-4">Debit Transactions (بردگی)</h2>
//                 <table className="border border-black w-full">
//                     <thead>
//                         <tr>
//                             {creditPartHeader.map((header, index) => (
//                                 <th key={index} className="p-2 text-white bg-black border border-black">
//                                     {header}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {debitPart.map(item => (
//                             <tr key={item.id} className="border border-black">
//                                 <td className="p-4 border border-black">{item.id}</td>
//                                 <td className="border border-black">{item.customer_id}</td>
//                                 <td className="border border-black">{item.transactionType}</td>
//                                 <td className="border border-black">{item.currency}</td>
//                                 <td className="border border-black">{item.date}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 {debitPart.length === 0 && (
//                     <p className="text-center p-4">No debit transactions found</p>
//                 )}
//             </div>
//         </div>
//     )
// }