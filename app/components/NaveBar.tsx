
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdMenu, MdClose } from "react-icons/md";
import { DepositPopup } from '../dashboard/naveBarMiue/deposit_withdraw/DepositPopup';
import Exchanges from './Exchanges';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDepositPopupOpen, setIsDepositPopupOpen] = useState(false);
    const [isExchangePopupOpen, setIsEchangePopupOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openDepositPopup = () => {
        setIsDepositPopupOpen(true);
        setIsOpen(false);
    };

    const closeDepositPopup = () => {
        setIsDepositPopupOpen(false);
    };



    const openExchange = () => {
        setIsEchangePopupOpen(true);
        setIsOpen(!isOpen);

    }
    const closeExchangePopup = () => {
        setIsEchangePopupOpen(false)
    }

    return (
        <nav className="">

            <div className='md:hidden bg-[#1c58dd] text-white p-4 flex justify-between items-center'>
                <div className="text-xl font-bold pl-4">EXCHANCH</div>

                <div onClick={toggleMenu} className="md:hidden">
                    <button>
                        {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>


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

                        <li>
                            <button onClick={openDepositPopup} className="text-white hover:text-gray-200 w-full text-right">
                                Deposit/Withdraw
                            </button>
                        </li>

                        <li>
                            <button onClick={openExchange} className="text-white hover:text-gray-200 w-full text-right">
                                Exchange
                            </button>
                        </li>

                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Transaction</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Check</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Money transfer</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Faild</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Backup</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Logout</Link></li>
                    </ul>
                </div>
            </div>


            <div className="hidden md:grid md:grid-cols-3 gap-1 ml-4 lg:hidden">

                <div className="flex  shadow-xl bg-slate-50 w-full p-2 h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
                        Deposit/withDraw
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Exchange</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#b92929] block w-full h-full flex items-center justify-center" href={''}>Tronsport</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Check</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Money transfer</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Faild</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Backup</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Logout</Link>
                </div>
            </div>


            <div className='hidden lg:flex gap-4'>

                <div className="flex ml-4 flex-col shadow-xl bg-slate-50 w-[150px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
                        Deposit/withDraw
                    </button>
                </div>

                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Exchange</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#b92929] block w-full h-full flex items-center justify-center" href={''}>Tronsport</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Check</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Money transfer</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Faild</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Backup</Link>
                </div>
                <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <Link className="text-[#1c58dd] block w-full h-full flex items-center justify-center" href={''}>Logout</Link>
                </div>
            </div>

            {/* پاپ‌آپ Deposit */}
            <DepositPopup isOpen={isDepositPopupOpen} onClose={closeDepositPopup} />
            <Exchanges isOpen={isExchangePopupOpen} onClose={closeExchangePopup} />
        </nav>
    );
};

export default Navbar;












//first version

// 'use client'



// import Link from 'next/link';
// import React, { useState } from 'react';
// import { HiMenu, HiX } from 'react-icons/hi'; // icons
// import { MdMenu, MdClose } from "react-icons/md";
// import PopupComponent from '../dashboard/naveBarMiue/deposit/page';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false); // control menu visibility

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };



//     return (
//         <nav className="">



//             {/* Menu Icon for small screens */}
//             <div className='md:hidden bg-[#1c58dd] text-white p-4 flex justify-between items-center'>
//                 {/* Logo */}
//                 <div className="text-xl font-bold pl-4">EXCHANCH</div>


//                 <div onClick={toggleMenu} className="md:hidden">
//                     <button >
//                         {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
//                     </button>
//                 </div>


//                 {/* Off-canvas Menu (for small screens) */}
//                 <div
//                     className={`fixed top-0 right-0 h-full w-2/3 bg-blue-700 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                         } transition-transform duration-300 ease-in-out md:hidden`}
//                 >
//                     <div onClick={toggleMenu} className="md:hidden p-4">
//                         <button className='bg-white rounded-full'>
//                             {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
//                         </button>
//                     </div>
//                     <ul className="p-6 space-y-4">
//                         <li><Link href={'/dashboard/naveBarMiue/deposit'} onClick={toggleMenu}>Deposit</Link></li>
//                         <li><Link href={'/dashboard/naveBarMiue/withdraw'} onClick={toggleMenu}>Withdraw</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Transaction</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Tronsport</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Check</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Money transfer</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Faild</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Backup</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Logout</Link></li>

//                     </ul>
//                 </div>
//             </div>








//             {/* Main Menu (hidden on small screens) for md screen */}
//             <div className="hidden md:grid md:grid-cols-4 gap-1 ml-4 lg:hidden">


//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/deposit'}>Deposit</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#b92929]" href={''}>Tronsport</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Check</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Faild</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Backup</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Logout</Link>
//                 </div>

//             </div>



//             {/* for large screen and hidden for md screen */}
//             <div className='hidden lg:flex gap-4'>

//                 <div className="flex ml-4 flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/deposit'}>Deposit</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#b92929]" href={''}>Tronsport</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Check</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Faild</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Backup</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px]  h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Logout</Link>
//                 </div>
//             </div>

//         </nav>
//     );
// };

// export default Navbar;

















// todaychange for popUp

// 'use client'

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { HiMenu, HiX } from 'react-icons/hi';
// import { MdMenu, MdClose } from "react-icons/md";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const openPopup = () => {
//         setIsPopupOpen(true);
//         setIsOpen(false); // منو را می‌بندیم وقتی پاپ‌آپ باز می‌شود
//     };

//     const closePopup = () => {
//         setIsPopupOpen(false);
//     };

//     return (
//         <nav className="">
//             {/* Menu Icon for small screens */}
//             <div className='md:hidden bg-[#1c58dd] text-white p-4 flex justify-between items-center'>
//                 <div className="text-xl font-bold pl-4">EXCHANCH</div>

//                 <div onClick={toggleMenu} className="md:hidden">
//                     <button>
//                         {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
//                     </button>
//                 </div>

//                 {/* Off-canvas Menu (for small screens) */}
//                 <div
//                     className={`fixed top-0 right-0 h-full w-2/3 bg-blue-700 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                         } transition-transform duration-300 ease-in-out md:hidden`}
//                 >
//                     <div onClick={toggleMenu} className="md:hidden p-4">
//                         <button className='bg-white rounded-full'>
//                             {isOpen ? <MdClose className='text-[#b92929]' size={28} /> : <HiMenu size={28} />}
//                         </button>
//                     </div>
//                     <ul className="p-6 space-y-4">
//                         {/* تغییر این لینک به دکمه برای باز کردن پاپ‌آپ */}
//                         <li>
//                             <button onClick={openPopup} className="text-white hover:text-gray-200">
//                                 Deposit
//                             </button>
//                         </li>
//                         <li><Link href={'/dashboard/naveBarMiue/withdraw'} onClick={toggleMenu}>Withdraw</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Transaction</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Tronsport</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Check</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Money transfer</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Faild</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Backup</Link></li>
//                         <li><Link href="#" onClick={toggleMenu}>Logout</Link></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Main Menu for md screen */}
//             <div className="hidden md:grid md:grid-cols-4 gap-1 ml-4 lg:hidden">
//                 {/* تغییر این لینک به دکمه برای باز کردن پاپ‌آپ */}
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openPopup} className="text-[#1c58dd]">
//                         Deposit
//                     </button>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
//                 </div>

//                 {/* بقیه لینک‌ها */}
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#b92929]" href={''}>Tronsport</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Check</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Faild</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Backup</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Logout</Link>
//                 </div>
//             </div>

//             {/* for large screen */}
//             <div className='hidden lg:flex gap-4'>
//                 {/* تغییر این لینک به دکمه برای باز کردن پاپ‌آپ */}
//                 <div className="flex ml-4 flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openPopup} className="text-[#1c58dd]">
//                         Deposit
//                     </button>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={'/dashboard/naveBarMiue/withdraw'}>Withdraw</Link>
//                 </div>

//                 {/* بقیه لینک‌ها */}
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Transaction</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#b92929]" href={''}>Tronsport</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Check</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Money transfer</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Faild</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Backup</Link>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-slate-50 w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <Link className="text-[#1c58dd]" href={''}>Logout</Link>
//                 </div>
//             </div>

//             {/* پاپ‌آپ کامپوننت */}
//             {isPopupOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center">
//                     {/* پس‌زمینه کدر */}
//                     <div
//                         className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
//                         onClick={closePopup}
//                     ></div>

//                     {/* محتوای پاپ‌آپ */}
//                     <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 border border-white border-opacity-30 transform transition-all duration-300 scale-95 animate-in fade-in-50 slide-in-from-bottom-5">
//                         <button
//                             onClick={closePopup}
//                             className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
//                         >
//                             ×
//                         </button>

//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Deposit</h2>
//                         <p className="text-gray-600 mb-6">
//                             این بخش Deposit است. فرم واریز یا اطلاعات مربوط به Deposit در اینجا نمایش داده می‌شود.
//                         </p>

//                         <div className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">مبلغ واریز</label>
//                                 <input
//                                     type="number"
//                                     className="w-full p-2 border border-gray-300 rounded-lg"
//                                     placeholder="مبلغ را وارد کنید"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">روش پرداخت</label>
//                                 <select className="w-full p-2 border border-gray-300 rounded-lg">
//                                     <option>کارت به کارت</option>
//                                     <option>کیف پول دیجیتال</option>
//                                     <option>رمز ارز</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="flex justify-end gap-3 mt-6">
//                             <button
//                                 onClick={closePopup}
//                                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//                             >
//                                 انصراف
//                             </button>
//                             <button
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//                             >
//                                 تایید واریز
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;