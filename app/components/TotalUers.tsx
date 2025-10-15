
'use client'


import axios from "axios"
import { useEffect, useState } from "react"


export default function TotalUsers() {
    const [totalUsers, setTotalUsers] = useState()

    useEffect(() => {

        const fatching = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/totalUser")
                const t = res.data
                setTotalUsers(t)
            } catch (erorr) {
                console.error(erorr)
            }
        }

        fatching()
    }, [])


    return (
        <div>
            <h1>{totalUsers}</h1>
        </div>
    )
}