
const journalOneData: jounalOneDateType[] = [
    { id: 1, cerrency: "All cash", Usd: 400, Af: 2800, Kldar: 900, Darham: 0, Uroe: 0 },
    { id: 2, cerrency: "YesterDay", Usd: 400, Af: 2800, Kldar: 900, Darham: 0, Uroe: 0 }

]

const creditPartHeader = ["number", "Date", "Details", "دلر", "افغانی", "کلدار", "درهم", "یورو", "توسط", "حزف"]
const creditPartData: creditPartDataType[] = [
    { number: 1, date: "2024", details: "kkkkkk", usd: 22, af: 300, Kaldar: 900, darham: 99, u: 88, by: "adim", delete: "icon" },
    { number: 2, date: "2024", details: "kkkkkk", usd: 22, af: 300, Kaldar: 900, darham: 99, u: 88, by: "adim", delete: "icon" },
]


export interface creditPartDataType {
    number: number, date: string, details: string, usd: number, af: number, Kaldar: number, darham: number, u: number, by: string, delete: string
}
export interface jounalOneDateType {
    id: number,
    cerrency: string,
    Usd: number,
    Af: number,
    Kldar: number,
    Darham: number,
    Uroe: number
}

export default function journalOne() {
    return (
        <div className="w-full ml-4 ">
            <div id="firsPar_currence" className="">
                <table className="border border-blue-600 w-full">
                    <thead className="border border-blue-800  bg-white">
                        <tr className=" ">
                            <th className=" p-2 ">Currency</th>
                            <th>دالر</th>
                            <th>افغانی</th>
                            <th>کلدار</th>
                            <th>درهم</th>
                            <th>یورو</th>
                        </tr>
                    </thead>
                    <tbody>

                        {journalOneData.map(item => (
                            <tr key={item.id} className="text-blue-950">
                                <td className={`p-2  text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.cerrency}</td>
                                <td className={`p-2 text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.Usd}</td>
                                <td className={`p-2 text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.Af}</td>
                                <td className={`p-2 text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.Kldar}</td>
                                <td className={`p-2 text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.Darham}</td>
                                <td className={`p-2 text-center rounded-md ${item.id % 2 === 0 ? "bg-[#65d3ecdd]" : "bg-[#307180dd]"}`}>{item.Uroe}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





            <div id="bootPart" className="flex sm:flex-col lg:flex-row">

                <div className="w-full">
                    <div className="w-full text-center">
                        <h1>Credit Part</h1>
                    </div>
                    <div className="w-full">
                        <table className="border border-black w-full">
                            <thead>
                                <tr key={"1"}>
                                    {creditPartHeader.map(item => (
                                        <th className="p-2 text-white bg-black">{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {creditPartData.map(item => (
                                    <tr className="border border-gray-400">
                                        <td className="p-4">{item.number}</td>
                                        <td>{item.date}</td>
                                        <td>{item.details}</td>
                                        <td>{item.usd}</td>
                                        <td>{item.af}</td>
                                        <td>{item.Kaldar}</td>
                                        <td>{item.darham}</td>
                                        <td>{item.u}</td>
                                        <td>{item.by}</td>
                                        <td>{item.delete}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                {/* debit Part */}

                <div className="w-full">
                    <div className="w-full text-center">
                        <h1>Debit Part</h1>
                    </div>
                    <div className="w-full">
                        <table className="border border-black w-full">
                            <thead>
                                <tr key={"1"}>
                                    {creditPartHeader.map(item => (
                                        <th className="p-2 text-white bg-black">{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {creditPartData.map(item => (
                                    <tr className="border border-gray-400">
                                        <td className="p-4">{item.number}</td>
                                        <td>{item.date}</td>
                                        <td>{item.details}</td>
                                        <td>{item.usd}</td>
                                        <td>{item.af}</td>
                                        <td>{item.Kaldar}</td>
                                        <td>{item.darham}</td>
                                        <td>{item.u}</td>
                                        <td>{item.by}</td>
                                        <td>{item.delete}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



        </div >
    )
}