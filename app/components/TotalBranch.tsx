
'use client'


import axios from "axios"
import { useEffect, useState } from "react"


export default function TotalBranch() {
    const [totalBran, setTotalBran] = useState()

    useEffect(() => {

        const fatching = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/totalBranch")
                const t = res.data
                setTotalBran(t)
            } catch (erorr) {
                console.error(erorr)
            }
        }

        fatching()
    }, [])


    return (
        <div>
            <h1>{totalBran}</h1>
        </div>
    )
}