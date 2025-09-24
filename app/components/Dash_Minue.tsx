



'use client'

import Link from "next/link";
import { useContext, useState } from "react";
import { DashboardMinueCtx } from "../context";

export default function Dash_Minue() {
    const ctx = useContext(DashboardMinueCtx);
    const [open, setOpen] = useState(false);
    const [openClass, setOpenClass] = useState(false);
    const [openBranch, setOpenBranch] = useState(false)


    if (!ctx) return null; // safeguard
    const { open: sidebarOpen, setOpen: setSidebarOpen } = ctx;

    return (
        <div className="pt-10 z-100">

            <div className="px-4 py-2 w-full hover:bg-[#cedbf4] ">
                <Link
                    href={'/dashboard/management'}
                    className="font-bold"
                    onClick={() => setSidebarOpen(false)}
                >
                    management
                </Link>
            </div>

            <div>
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-[#cedbf4] font-bold"
                >
                    Dashboard <span className="ml-2 text-[10px]">{open ? "▲" : "▼"}</span>
                </button>
                {open && (
                    <div className="w-full shadow-lg text-black">
                        <Link href="#" className="block px-4 py-2 hover:bg-[#cedbf4]"
                            onClick={() => setSidebarOpen(false)}
                        >

                            dashboard A

                        </Link>
                        <Link href="#" className="block px-4 py-2 hover:bg-[#cedbf4]" onClick={() => setSidebarOpen(false)}>
                            dashboard B
                        </Link>
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => setOpenClass(!openClass)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-[#cedbf4] font-bold"
                >
                    Class <span className="ml-2 text-[10px]">{openClass ? "▲" : "▼"}</span>
                </button>
                {openClass && (
                    <div className="w-full shadow-lg text-black">
                        <Link href="#" className="block px-4 py-2 hover:bg-[#cedbf4]" onClick={() => setSidebarOpen(false)}>
                            class A
                        </Link>
                        <Link href="#" className="block px-4 py-2 hover:bg-[#cedbf4]" onClick={() => setSidebarOpen(false)}>
                            class B
                        </Link>
                    </div>
                )}
            </div>







            <div>
                <button
                    onClick={() => setOpenBranch(!openBranch)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-[#cedbf4] font-bold"
                >
                    Branches <span className="ml-2 text-[10px]">{openClass ? "▲" : "▼"}</span>
                </button>
                {openBranch && (
                    <div className="w-full shadow-lg text-black">
                        <Link href="/dashboard/branches/manageBranch" className="block px-4 py-2 hover:bg-[#cedbf4]" onClick={() => setSidebarOpen(false)}>
                            manage branch
                        </Link>
                        <Link href="/dashboard/branches/addBranch" className="block px-4 py-2 hover:bg-[#cedbf4]" onClick={() => setSidebarOpen(false)}>
                            add branch
                        </Link>
                    </div>
                )}
            </div>







        </div>
    );
}



