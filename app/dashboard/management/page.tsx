import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { PiHandDepositFill } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
import AllBenefit from "@/app/components/AllBenefit";


export default function ManagePage() {
    return (


        <div className="w-full">


            <div className="bg-bgNaveBarHover grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

                {/* Left Card */}
                <div className="bg-white flex flex-col gap-2 w-full rounded-md p-2 shadow-md">
                    <h1 className="font-bold p-4 text-naqibBlue">Welcome to AAA Money Transaction</h1>
                </div>



                {/* Right Section */}
                <div>
                    <AllBenefit />
                </div>
            </div>


            <div className="bg-varWhite grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4 p-4 ">
                <div className="shadow-xl sm:w-full w-full mx-auto m-2 rounded-md  p-4 flex items-center justify-center">
                    <Link href={'/outsiteDashboard/management2/showAndEditCustomer'}>
                        <div className="flex justify-between w-full items-center">
                            <button className="font-bold text-naqibBlue mr-4 ml-4">Click to show All customers :  </button>
                            <div>
                                <FaUsers className="text-naqibBlue size-10" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="shadow-xl  w-full mx-auto m-2 rounded-md  p-4 flex items-center justify-center">
                    <Link href={'/outsiteDashboard/management2/showAndEditDepositWithdraw'}>
                        <div className="flex justify-between w-full items-center ">
                            <button className="font-bold text-naqibBlue mr-4 ml-4">Deposit Withdraw :  </button>
                            <div>
                                <PiHandDepositFill className="text-naqibBlue size-10" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="shadow-xl  w-full mx-auto m-2 rounded-md  p-4 flex items-center justify-center">
                    <Link href={'/outsiteDashboard/management2/showExchange'}>
                        <div className="flex justify-between w-full items-center ">
                            <button className="font-bold text-naqibBlue mr-4 ml-4">Exchange :  </button>
                            <div>
                                <FaExchangeAlt className="text-naqibBlue size-10" />
                            </div>
                        </div>
                    </Link>
                </div>














            </div>

        </div>


    )
}




