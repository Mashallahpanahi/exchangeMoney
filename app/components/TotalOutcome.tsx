
'use client'


import axios from "axios"
import { useEffect, useState } from "react"
import { FormatNumberWithCommas } from "../utils/spreatNumber3"


export default function TotalOutcome() {
    const [totalOutcome, setTotalOutcome] = useState<string>("")

    useEffect(() => {

        const fatching = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/totalOutcomeLastMonth")
                const t = res.data
                let withComa = FormatNumberWithCommas(t)
                setTotalOutcome(withComa)
            } catch (erorr) {
                console.error(erorr)
            }
        }

        fatching()
    }, [])


    return (
        <div>
            <h1>{totalOutcome}</h1>
        </div>
    )
}