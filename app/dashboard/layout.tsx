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
        <div className="flex h-screen w-screen overflow-hidden">

            {/* Sidebar */}
            <div className={` fixed md:static top-0 left-0 h-full bg-bgNaveBarHover shadow-lg z-50
                              transform transition-transform duration-300
                              ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-dashboarLayoutBg w-10 h-10 md:w-12 md:h-12"></div>
                        <h1 className="text-sm md:text-base font-semibold">Company Name</h1>
                    </div>

                    {/* Close button only on mobile */}
                    <button
                        className="md:hidden bg-varWhite p-2 rounded-full"
                        onClick={() => setOpen(false)}
                    >
                        <MdClose className="w-6 h-6 text-naqibRed" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 px-4">
                    <div className="h-[2px] w-3/4 bg-naqibRed"></div>
                    <div className="h-[2px] w-1/2 bg-naqibBlue"></div>
                </div>

                <div className="mt-4 md:w-[200px] lg:w[350px]">
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
                        className="rounded-r-2xl fixed h-[100vh] top-0 left-0 w-4 flex items-center justify-center bg-varWhite shadow-md md:hidden z-40">
                        <button className="bg- h-16 rounded-r-2xl  bg-naqibBlue " onClick={() => setOpen(true)}>
                            <IoIosArrowForward />
                        </button>

                    </div>
                )}

                {/* Top navbar */}
                <div className="w-full">

                    <div className="">
                        <NaveBar />
                    </div>
                </div>

                {/* Page content */}
                <div className="flex px-2 sm:px-4 py-2 md:py-4 w-full overflow-auto overflow-x-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
}























//origin
// "use client";
// import { useState } from "react";
// import Dash_Minue from "../components/Dash_Minue";
// import NaveBar from "../components/NaveBar";
// import { MdMenu, MdClose } from "react-icons/md";
// import { IoIosArrowForward } from "react-icons/io";
// import { DashboardMinueCtx } from "../context";

// export default function DashboardLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="flex h-screen w-screen ">

//             {/* Sidebar */}
//             <div
//                 className={` fixed md:static top-0 left-0 h-full bg-bgNaveBarHover shadow-lg z-50
//         transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//             >
//                 {/* Sidebar header */}
//                 <div className="flex items-center justify-between p-4">
//                     <div className="flex items-center gap-3">
//                         <div className="rounded-full bg-dashboarLayoutBg w-10 h-10 md:w-12 md:h-12"></div>
//                         <h1 className="text-sm md:text-base font-semibold">Company Name</h1>
//                     </div>

//                     {/* Close button only on mobile */}
//                     <button
//                         className="md:hidden bg-varWhite p-2 rounded-full"
//                         onClick={() => setOpen(false)}
//                     >
//                         <MdClose className="w-6 h-6 text-naqibRed" />
//                     </button>
//                 </div>

//                 <div className="flex flex-col gap-2 px-4">
//                     <div className="h-[2px] w-3/4 bg-naqibRed"></div>
//                     <div className="h-[2px] w-1/2 bg-naqibBlue"></div>
//                 </div>

//                 <div className="mt-4 md:w-[250px]">

//                     <DashboardMinueCtx.Provider value={{ open, setOpen }}>
//                         <Dash_Minue />
//                     </DashboardMinueCtx.Provider>


//                 </div>
//             </div>

//             {/* Main content */}
//             <div className="flex-1 flex flex-col bg-[#e4eaf0]">
//                 {/* Left-side vertical menu button (only when sidebar is closed) */}

//                 {!open && (
//                     <div
//                         className="rounded-r-2xl fixed h-[100vh] top-0 left-0 w-4 flex items-center justify-center bg-varWhite shadow-md md:hidden z-40">
//                         <button className="bg- h-16 rounded-r-2xl  bg-naqibBlue " onClick={() => setOpen(true)}>
//                             <IoIosArrowForward />
//                         </button>

//                     </div>
//                 )}

//                 {/* Top navbar */}
//                 <div>

//                     <div className="">
//                         <NaveBar />
//                     </div>
//                 </div>

//                 {/* Page content */}
//                 <div className="flex px-2 sm:px-4 py-2 md:py-4">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }

