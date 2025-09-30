



export default function ManagePage() {
    return (


        <div className="w-full">


            <div className="bg-bgNaveBarHover grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

                {/* Left Card */}
                <div className="bg-white flex flex-col gap-2 w-full rounded-md p-2 shadow-md">
                    <h1 className="font-bold p-4 text-naqibBlue">Welcome to AAA Money Transaction</h1>
                    <input
                        className="mx-4 bg-slate-200 p-2 rounded-md"
                        type="text"
                        placeholder="Enter the rate"
                    />
                </div>



                {/* Right Section */}
                <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="bg-varWhite p-4 rounded-l-[1000px] flex shadow-lg items-center justify-center">
                        <h1>Our Branches</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-varWhite p-4 rounded-md flex shadow-lg items-center justify-center">
                            Qandahar Branch Info
                        </div>
                        <div className="bg-varWhite p-4 rounded-md flex shadow-lg items-center justify-center">
                            Herat Branch Info
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-varWhite grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4 p-4 h-screen">

                <div className="shadow-xl sm:w-full w-3/5 mx-auto m-2 rounded-md  p-4">
                    <h1 className="font-bold text-naqibBlue ">All info about your branch.</h1>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                </div>

                <div className="shadow-xl sm:w-full w-3/5 mx-auto m-2 rounded-md  p-4">
                    <h1 className="font-bold text-naqibBlue ">All info about your branch.</h1>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                </div>
                <div className="shadow-xl sm:w-full w-3/5 mx-auto m-2 rounded-md  p-4">
                    <h1 className="font-bold text-naqibBlue ">All info about your branch.</h1>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                    <h2>this is some text about this branch</h2>
                </div>

            </div>

        </div>


    )
}




