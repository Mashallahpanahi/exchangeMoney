'use client'


import { useParams } from "next/navigation"


export default function UpdateHawala() {
    const params = useParams();
    const id = params.idForEdit as string

    return (
        <div>
            <h1>udate{id}</h1>
        </div>
    )
}