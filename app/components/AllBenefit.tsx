
'use client'


import axios from "axios"
import { useEffect, useState } from "react"
import { FormatNumberWithCommas } from "../utils/spreatNumber3"


interface b {
    afghani: string,
    kaldar: string,
    dolar: string,
    toman: string,
}

export default function AllBenefit() {
    useEffect(() => {
        const fatching = async () => {
            const res = await axios.get<b>("http://localhost:8000/api/benefit")
            const rslt = res.data
            setBenefits(rslt)
        }
        fatching()
    }, [])


    const [benefits, setBenefits] = useState<b>()

    return (
        <div>
            <div className="grid grid-cols-2 gap-2 w-full">
                <div className="bg-varWhite rounded-l-[1000px] flex shadow-lg items-center justify-center">
                    <h1 className="font-semibold text-naqibBlue text-4xl">Benefits</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="bg-varWhite p-2 rounded-md flex shadow-lg items-center justify-between"><span>Dolar: </span> <span className={`${Number(benefits?.dolar) >= 0 ? "text-naqibBlue" : "text-naqibRed"}`}> {FormatNumberWithCommas(Number(benefits?.dolar))}</span></h1>
                    <h1 className="bg-varWhite p-2 rounded-md flex shadow-lg items-center justify-between"> <span>Afghani:</span> <span className={`${Number(benefits?.afghani) >= 0 ? "text-naqibBlue" : "text-naqibRed"}`}>{FormatNumberWithCommas(Number(benefits?.afghani))}</span></h1>
                    <h1 className="bg-varWhite p-2 rounded-md flex shadow-lg items-center justify-between"> <span>Toman:</span> <span className={`${Number(benefits?.toman) >= 0 ? "text-naqibBlue" : "text-naqibRed"}`}>{FormatNumberWithCommas(Number(benefits?.toman))}</span></h1>
                    <h1 className="bg-varWhite p-2 rounded-md flex shadow-lg items-center justify-between"><span>Kaldar:</span><span className={`${Number(benefits?.kaldar) >= 0 ? "text-naqibBlue" : "text-naqibRed"}`}>{FormatNumberWithCommas(Number(benefits?.kaldar))}</span></h1>

                </div>
            </div>
        </div>
    )
}