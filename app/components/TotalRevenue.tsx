
'use client'


import axios from "axios"
import { useEffect, useState } from "react"
import { FormatNumberWithCommas } from "../utils/spreatNumber3"


export default function TotalRevenue() {
    const [TotalRevenue, setTotalRevenue] = useState<string>("")

    useEffect(() => {

        const fatching = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/totalIncomeLastMonth")
                const t = res.data
                let withComa = FormatNumberWithCommas(t)
                setTotalRevenue(withComa)
            } catch (erorr) {
                console.error(erorr)
            }
        }

        fatching()
    }, [])


    return (
        <div>
            {TotalRevenue}
        </div>
    )
}