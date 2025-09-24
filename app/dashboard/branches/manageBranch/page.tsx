
import axsios from 'axios'


export default async function ManageBranchPage() {
    // const {data} = await axsios.get('http://localhost:8000/api/Branch')
    // console.log(data)
    return (
        <div className="p-4 ">
            <table className=" border border-gray-300 rounded-md shadow-md ">
                <thead >
                    <tr className="border border-gray-300 text-[#1c58dd]">
                        <th className="p-4 border border-gray-300">branchName</th>
                        <th className="p-4 border border-gray-300" >branchCity</th>
                        <th className="p-4 border border-gray-300">branchManager</th>
                        <th className="p-4 border border-gray-300">delete</th>
                        <th className="p-4 border border-gray-300">update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-300" >
                        <td className="p-4">Kabuly</td>
                        <td className="p-4">Kabul</td>
                        <td className="p-4">Karim</td>
                        <td className="p-4">delet</td>
                        <td className="p-4">update</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}




