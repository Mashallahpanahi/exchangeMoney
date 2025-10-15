

'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function DolarRate() {
    const router = useRouter();

    const [rate, setRate] = useState<number | null>(null)

    const handleRate = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/getRate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ rate })
            })

            if (!res.ok) {
                throw new Error(`Failed to save rate: ${res.status}`)
            }

            const result = await res.json()
            router.refresh();
            alert("Rate saved successfully")



        } catch (error) {
            console.error("Error saving rate:", error)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const numValue = parseFloat(value)
        if (!isNaN(numValue) && numValue > 0) {
            setRate(numValue)
        }
    }

    return (
        <div className=" flex mb-4"  >
            <input
                name="rate"
                onChange={handleInputChange}
                type="number"
                step="0.01"
                placeholder="Dolar Rate $"
                className="w-full bg-gray-50 p-2 rounded-full shadow-lg mb-2 outline-none pl-4"
            />
            <button
                onClick={handleRate}
                disabled={!rate || rate <= 0}
                className="px-4 py-2  text-white bg-green-300 hover:bg-green-600 rounded-full "
            >
                Save
            </button>
        </div>
    )
}

















// 'use client'

// import { useRouter } from "next/router"
// import { useState } from "react"


// export default function DolarRate() {
//     const router= useRouter();

//     const [rate, setRate] = useState<number | null>(null)

//     const handleRate = async () => {
//         try {
//             const res = await fetch("http://localhost:8000/api/getRate", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ rate })
//             })

//             if (!res.ok) {
//                 throw new Error(`Failed to save rate: ${res.status}`)
//             }

//             const result = await res.json()
//             alert("Rate saved successfully")
//             router.refresh();


//         } catch (error) {
//             console.error("Error saving rate:", error)
//         }
//     }

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value
//         const numValue = parseFloat(value)
//         if (!isNaN(numValue) && numValue > 0) {
//             setRate(numValue)
//         }
//     }

//     return (
//         <div className=" flex mb-4"  >
//             <input
//                 name="rate"
//                 onChange={handleInputChange}
//                 type="number"
//                 step="0.01"
//                 placeholder="Dolar Rate $"
//                 className="w-full bg-gray-50 p-2 rounded-full shadow-lg mb-2 outline-none pl-4"
//             />
//             <button
//                 onClick={handleRate}
//                 disabled={!rate || rate <= 0}
//                 className="px-4 py-2  text-white bg-green-300 hover:bg-green-600 rounded-full "
//             >
//                 Save
//             </button>
//         </div>
//     )
// }
