
'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function AddEmployee() {
    const router = useRouter()


    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [fatherName, setFatherName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [salary, setSalary] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [date, setDate] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const EmployeeData = {
            name,
            lastName,
            fatherName,
            phoneNumber,
            salary,
            address,
            date
        }
        try {
            const res = await fetch("http://localhost:8000/api/employee", {
                method: "POST",
                headers: {
                    'Content-Type': 'appliction/json'
                },
                body: JSON.stringify(EmployeeData)
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(`failto fetch employee ${data.error}`)
            }
            else {
                alert(data.message)
                router.refresh()
                router.push('/employee/AllEmployeee')
            }
        } catch (error) {
            console.error(error)
        }


    }
    return (
        <div>
            <div className="sm:w-80 lg:w-4/6 bg-white mx-auto shadow-lg p-4 mt-8 rounded-md">
                <h1 className="font-semibold p-2">Add new employee</h1>
                <form onSubmit={handleSubmit} className="" >
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 ">
                        <div>
                            <h6>name:</h6>
                            <input required type="text" name="name" placeholder="name" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <h6>lastName:</h6>
                            <input required type="text" name="lastName" placeholder="lastName" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <h6>fotherName:</h6>
                            <input required type="text" name="fatherName" placeholder="fatherName" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setFatherName(e.target.value)} />
                        </div>
                        <div>
                            <h6>phone:</h6>
                            <input required type="number" name="phoneNumber" placeholder="phone" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div>
                            <h6>salary:</h6>
                            <input required type="text" name="salary" placeholder="salary" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setSalary(e.target.value)} />
                        </div>
                        <div>
                            <h6>adrees:</h6>
                            <input required type="text" name="address" placeholder="address" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100"
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div>
                            <h6>date:</h6>
                            <input required type="date" name="date" className="bg-formInputBg border border-formInputBorder rounded-md w-full p-2 outline-none z-100 "
                                onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <button className="bg-green-500 text-white font-semibold w-full  rounded-md p-2 lg:h-10 lg:mt-6" type="submit">Add</button>
                    </div>


                </form>
            </div>
        </div>
    )
}