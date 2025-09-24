"use client";
import { useState } from "react";
import Dash_Minue from "../components/Dash_Minue";
import NaveBar from "../components/NaveBar";
import { MdMenu, MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { DashboardMinueCtx } from "../context";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen w-screen ">

            {/* Sidebar */}
            <div
                className={` fixed md:static top-0 left-0 h-full bg-slate-50 shadow-lg z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-gray-600 w-10 h-10 md:w-12 md:h-12"></div>
                        <h1 className="text-sm md:text-base font-semibold">Company Name</h1>
                    </div>

                    {/* Close button only on mobile */}
                    <button
                        className="md:hidden bg-white p-2 rounded-full"
                        onClick={() => setOpen(false)}
                    >
                        <MdClose className="w-6 h-6 text-red-600" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 px-4">
                    <div className="h-[2px] w-3/4 bg-red-600"></div>
                    <div className="h-[2px] w-1/2 bg-blue-600"></div>
                </div>

                <div className="mt-4 md:w-[250px]">

                    <DashboardMinueCtx.Provider value={{ open, setOpen }}>
                        <Dash_Minue />
                    </DashboardMinueCtx.Provider>


                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col bg-[#e4eaf0]">
                {/* Left-side vertical menu button (only when sidebar is closed) */}

                {!open && (
                    <div
                        className="rounded-r-2xl fixed h-[100vh] top-0 left-0 w-4 flex items-center justify-center bg-white shadow-md md:hidden z-40">
                        <button className="bg- h-16 rounded-r-2xl  bg-[#1c58dd] " onClick={() => setOpen(true)}>
                            <IoIosArrowForward />
                        </button>

                    </div>
                )}








                {/* Top navbar */}
                <div>

                    <div className="">
                        <NaveBar />
                    </div>
                </div>

                {/* Page content */}
                <div className="flex px-2 sm:px-4 py-2 md:py-4">
                    {children}
                </div>
            </div>
        </div>
    );
}



// "use client";
//   import { useState } from "react";
//   import Dash_Minue from "../components/Dash_Minue";
//   import NaveBar from "../components/NaveBar";
//   import { MdMenu, MdClose } from "react-icons/md";

// export default function DashboardLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="w-screen flex flex-col ">
//             <div
//                 className=
//                 {`fixed md:static top-0 left-0 h-full bg-slate-50 shadow-lg z-50 transform transition-transform duration-300
// w-[250px] lg:w-[300px]
//         ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//             >
//                 {/* Sidebar header with close button on mobile */}
//                 <div className="flex items-center justify-between p-4 gap-4">
//                     <div className="flex items-center gap-4">
//                         <h1 className="rounded-full bg-gray-600 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"></h1>
//                         <h1 className="text-sm md:text-base font-semibold">
//                             Company Name
//                         </h1>
//                     </div>

//                     {/* Close button only on mobile */}
//                     <button
//                         className="md:hidden rounded-full bg-white p-2"
//                         onClick={() => setOpen(false)}
//                     >
//                         <MdClose className="w-6 h-6 text-[#b92929]" />
//                     </button>
//                 </div>

//                 <div className="flex flex-col gap-2 pt-4 md:pt-6">
//                     <h5 className="h-[2px] w-[70%] md:w-[80%] bg-[#b92929]"></h5>
//                     <h5 className="h-[1.5px] w-[50%] md:w-[60%] bg-[#1c58dd] "></h5>
//                 </div>

//                 <div className="mt-4 md:mt-6">
//                     <Dash_Minue />
//                 </div>
//             </div>

//             {/* Main content */}
//             <div className="bg-[#e4eaf0] shadow-lg w-full px-2 sm:px-4 py-2 md:py-4">
//                 <div className="flex items-center justify-between">
//                     {/* Open button only when sidebar is closed (mobile) */}
//                     {!open && (
//                         <button
//                             className="md:hidden rounded-full bg-white p-2"
//                             onClick={() => setOpen(true)}
//                         >
//                             <MdMenu className="w-6 h-6 text-[#1c58dd]" />
//                         </button>
//                     )}

//                     <NaveBar />
//                 </div>

//                 <div className="mt-2 md:mt-4">{children}</div>
//             </div>
//         </div>
//     );
// }



