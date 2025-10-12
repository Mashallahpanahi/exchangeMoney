
import { FaCodeBranch } from "react-icons/fa";
import { FaUserGroup } from 'react-icons/fa6';


export default function DashboardBox() {
    return (
        <div className="m-6 mb-4 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto   ">

            <div className="bg-white w-full rounded-md p-4 shadow-lg mx-auto">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-gray-600">Total Revenue</h1>
                        <span className="text-green-600 font-bold bg-green-100 w-8 rounded-full flex items-center justify-center">$</span>
                    </div>
                    <h1 className="font-semibold">$555555555555</h1>
                    <h6 className="text-gray-300">this is from last month</h6>
                </div>
                <div className="w-full h-[4px] bg-gradient-to-r from-green-500 to-yellow-200 rounded-full mt-4"></div>
            </div>

            <div className="bg-white w-full rounded-md p-4 shadow-lg mx-auto">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-gray-600">Branch</h1>
                        <span className="text-green-600 font-bold bg-green-100 w-8 rounded-full flex items-center justify-center"><FaCodeBranch /></span>
                    </div>
                    <h1 className="font-semibold">$555555555555</h1>
                    <h6 className="text-gray-300">total Branch</h6>
                </div>
                <div className="w-full h-[4px] bg-gradient-to-r from-purple-700 to-yellow-400 rounded-full mt-4"></div>
            </div>

            <div className="bg-white w-full rounded-md p-4 shadow-lg mx-auto">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-gray-600">Users</h1>
                        <span className="text-green-600 font-bold bg-green-100 w-8 rounded-full flex items-center justify-center"><FaUserGroup /></span>
                    </div>
                    <h1 className="font-semibold">$555555555555</h1>
                    <h6 className="text-gray-300">total users</h6>
                </div>
                <div className="w-full h-[4px] bg-gradient-to-r from-naqibBlue to-yellow-200 rounded-full mt-4"></div>
            </div>

            <div className="bg-white w-full rounded-md p-4 shadow-lg mx-auto">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-gray-600">Total Outcome</h1>
                        <span className="text-green-600 font-bold bg-green-100 w-8 rounded-full flex items-center justify-center">$</span>
                    </div>
                    <h1 className="font-semibold">$555555555555</h1>
                    <h6 className="text-gray-300">this is from last month</h6>
                </div>
                <div className="w-full h-[4px] bg-gradient-to-r from-yellow-400 to-purple-900 rounded-full mt-4"></div>
            </div>

        </div>
    )
}