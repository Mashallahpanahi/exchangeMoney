



'use client'

import Link from "next/link";
import { useContext, useState } from "react";
import { DashboardMinueCtx } from "../context";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaJournalWhills } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";

export default function Dash_Minue() {
    const ctx = useContext(DashboardMinueCtx);
    const [open, setOpen] = useState(false);
    const [openClass, setOpenClass] = useState(false);
    const [openBranch, setOpenBranch] = useState(false);
    const [openJournal, setOpenJournal] = useState(false)
    const [openHomePage, setOpenHomePage] = useState(false);


    if (!ctx) return null; // safeguard
    const { open: sidebarOpen, setOpen: setSidebarOpen } = ctx;

    return (
        <div className="pt-10 z-100">


            <div className="px-4 py-2 w-full hover:bg-dashboardMinueOnHover ">

                <Link
                    href={'/dashboard'}
                    className="font-bold flex items-center gap-2 "
                    onClick={() => setSidebarOpen(false)}
                ><span><MdOutlineHomeWork /></span>
                    Home
                </Link>
            </div>

            <div className="px-4 py-2 w-full hover:bg-dashboardMinueOnHover ">

                <Link
                    href={'/dashboard/management'}
                    className="font-bold flex items-center gap-2"
                    onClick={() => setSidebarOpen(false)}
                >
                    <span><MdManageAccounts /></span>
                    <span>management</span>
                </Link>
            </div>



            <div>
                <button
                    onClick={() => setOpenJournal(!openJournal)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-dashboardMinueOnHover font-bold"

                >
                    <span className="flex items-center gap-2"> <FaJournalWhills /> Journal</span>
                    <span className="ml-2 text-[10px]">{openJournal ? "▲" : "▼"}</span>
                </button>
                {openJournal && (
                    <div className="w-full shadow-lg text-black">
                        <Link href="/dashboard/journal/journalOne" className="block px-4 py-2 hover:bg-dashboardMinueOnHover"
                            onClick={() => setSidebarOpen(false)}
                        >
                            Journal 1
                        </Link>
                        <Link href="/dashboard/journal/journalTwo" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            Journal 2
                        </Link>
                    </div>
                )}
            </div>






            <div>
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-dashboardMinueOnHover font-bold"
                >
                    <span className="flex items-center gap-2"><MdOutlineCurrencyExchange /> Hawala Status</span><span className="ml-2 text-[10px]">{open ? "▲" : "▼"}</span>
                </button>
                {open && (
                    <div className="w-full shadow-lg text-black">

                        <Link href="/hawala/AllHawala" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            All
                        </Link>
                        <span></span>

                        {/* <Link href="#" className="block px-4 py-2 hover:bg-dashboardMinueOnHover"
                            onClick={() => setSidebarOpen(false)}
                        >
                            Pending Approvals

                        </Link>
                        <Link href="#" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            Approved Transactions
                        </Link>
                        <Link href="#" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            Rejected Transactions
                        </Link> */}
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => setOpenBranch(!openBranch)}
                    className="inline-flex justify-between items-center w-full px-4 py-2 hover:bg-dashboardMinueOnHover font-bold"
                >
                    <span className="flex items-center gap-2"><FaCodeBranch /> Branches</span>  <span className="ml-2 text-[10px]">{openClass ? "▲" : "▼"}</span>
                </button>
                {openBranch && (
                    <div className="w-full shadow-lg text-black">
                        <Link href="/dashboard/branches/manageBranch" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            manage branch
                        </Link>
                        <Link href="/dashboard/branches/addBranch" className="block px-4 py-2 hover:bg-dashboardMinueOnHover" onClick={() => setSidebarOpen(false)}>
                            add branch
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}



