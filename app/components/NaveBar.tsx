'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // icons
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // control menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className="">



            {/* Menu Icon for small screens */}
            <div className='md:hidden bg-[#1c58dd] text-white p-4 flex justify-between items-center'>
                {/* Logo */}
                <div className="text-xl font-bold pl-4">EXCHANCH</div>


                <div onClick={toggleMenu} className="md:hidden">
                    <button >
                        {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>


                {/* Off-canvas Menu (for small screens) */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-blue-700 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <div onClick={toggleMenu} className="md:hidden p-4">
                        <button className='bg-white rounded-full'>
                            {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                    <ul className="p-6 space-y-4">
                        <li><Link href={'/dashboard/naveBarMiue/deposit'} onClick={toggleMenu}>Deposit</Link></li>
                        <li><Link href={'/dashboard/naveBarMiue/withdraw'} onClick={toggleMenu}>Withdraw</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Transaction</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Tronsport</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Check</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Money transfer</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Faild</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Backup</Link></li>
                        <li><Link href="#" onClick={toggleMenu}>Logout</Link></li>

                    </ul>
                </div>
            </div>








            {/* Main Menu (hidden on small screens) for md screen */}
            <div className="hidden md:grid md:grid-cols-4 gap-1 ml-4 lg:hidden">


                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/deposit'}>Deposit</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#b92929]" href={''}>Tronsport</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Check</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Faild</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Backup</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Logout</Link>
                </div>

            </div>



            {/* for large screen and hidden for md screen */}
            <div className='hidden lg:flex gap-4'>

                <div className="flex ml-4 flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/deposit'}>Deposit</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#b92929]" href={''}>Tronsport</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Check</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Faild</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Backup</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd]" href={''}>Logout</Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
