
'use client'

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from "react-icons/md";
import Exchanges from './Exchanges';
import TransactionMoney from './TransactionMoney';
import Hawala from './Hawala';
import AddCustomer from './AddCustomer';
import DepositPopup from './DepositPopup';
import Outcome from './Outcome';
import Income from './Income';
import TotalCash from './TotalCash';





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDepositPopupOpen, setIsDepositPopupOpen] = useState(false);
    const [isExchangePopupOpen, setIsEchangePopupOpen] = useState(false);



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



    const [isTransactionPopupOpen, setIsTransactionPopupOpen] = useState(false);
    const openTransaction = () => {
        setIsTransactionPopupOpen(true)
        setIsOpen(!isOpen)
    }
    const closeTransactionPopup = () => {
        setIsTransactionPopupOpen(false)
    }


    const [isHawalaPopupOpen, setIsHawalaPopupOpen] = useState(false)
    const openHawala = () => {
        setIsHawalaPopupOpen(true)
        setIsOpen(!open)
    }
    const closeHawalaPopup = () => {
        setIsHawalaPopupOpen(false)
    }

    const [isCustomerPopupOpen, setIsCustomerPopupOpen] = useState(false)
    const openCustomer = () => {
        setIsCustomerPopupOpen(true)
        setIsOpen(!open)
    }
    const closeCustomerPopup = () => {
        setIsCustomerPopupOpen(false)
    }


    const [isOutcomePopupOpen, setIsOutcomePopupOpen] = useState(false)
    const openOutcome = () => {
        setIsOutcomePopupOpen(true)
        setIsOpen(!open)
    }
    const closeOutcomePopup = () => {
        setIsOutcomePopupOpen(false)
    }


    const [isIncomePopupOpen, setIsIncomePopupOpen] = useState(false)
    const openIncome = () => {
        setIsIncomePopupOpen(true)
        setIsOpen(!open)
    }
    const closeIncomePopup = () => {
        setIsIncomePopupOpen(false)
    }



    const [isTotalCashPopupOpen, setIsOpenTotalCash] = useState(false)
    const openTotalCash = () => {
        setIsOpenTotalCash(true)
        setIsOpen(!open)
    }
    const closeTotalCashPopup = () => {
        setIsOpenTotalCash(false)
    }



    return (
        <nav className="">

            <div className='md:hidden bg-naqibBlue text-varWhite p-4 flex justify-between items-center'>
                <div className="text-xl font-bold pl-4">EXCHANCH</div>

                <div onClick={toggleMenu} className="md:hidden">
                    <button>
                        {isOpen ? <MdClose className='text-naqibRed' size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>


                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-naqibBlue z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <div onClick={toggleMenu} className="md:hidden p-4">
                        <button className='bg-varWhite rounded-full'>
                            {isOpen ? <MdClose className='text-naqibRed' size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                    <ul className="p-6 space-y-4">

                        <li>
                            <button onClick={openDepositPopup} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Deposit/Withdraw
                            </button>
                        </li>

                        <li>
                            <button onClick={openExchange} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Exchange
                            </button>
                        </li>

                        {/* <li>
                            <button onClick={openTransaction} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Transaction
                            </button>
                        </li> */}

                        <li>
                            <button onClick={openHawala} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Hawala
                            </button>
                        </li>

                        <li>
                            <button onClick={openCustomer} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Customer
                            </button>
                        </li>

                        <li>
                            <button onClick={openOutcome} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Outcome
                            </button>
                        </li>
                        <li>
                            <button onClick={openIncome} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Income
                            </button>
                        </li>
                        <li>
                            <button onClick={openTotalCash} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
                                Total_cash
                            </button>
                        </li>

                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Faild</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Backup</Link></li>
                        <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Logout</Link></li>
                    </ul>
                </div>
            </div>


            <div className="hidden md:grid md:grid-cols-4 gap-1  lg:hidden ">

                <div className="flex  shadow-xl bg-bgNaveBarHover w-full p-2 h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
                        Deposit/withDraw
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openExchange} className="text-naqibBlue  w-full ">
                        Exchange
                    </button>
                </div>
                {/* <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openTransaction} className="text-naqibBlue w-full ">
                        Transaction
                    </button>
                </div> */}
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openHawala} className="text-naqibBlue w-full ">
                        Hawala
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openCustomer} className="text-naqibBlue w-full ">
                        Customer
                    </button>
                </div>


                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openIncome} className="text-naqibBlue w-full">
                        Income
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openTotalCash} className="text-naqibBlue w-full ">
                        Total_cash
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
                    <button onClick={openOutcome} className="text-naqibRed w-full">
                        Outcome
                    </button>
                </div>
                <div className="flex shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button className="text-naqibRed w-full ">
                        Logout
                    </button>
                </div>
            </div>





            <div className='hidden lg:flex gap-2'>

                <div className="flex ml-4 flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver pr-1 pl-1">
                    <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
                        Deposit/withDraw
                    </button>
                </div>

                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openExchange} className="text-naqibBlue  w-full ">
                        Exchange
                    </button>
                </div>
                {/* <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openTransaction} className="text-naqibBlue w-full">
                        Transaction
                    </button>
                </div> */}
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openHawala} className="text-naqibBlue w-full">
                        Hawala
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openCustomer} className="text-naqibBlue w-full ">
                        Customer
                    </button>
                </div>

                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <Link className="text-naqibBlue  w-full h-full flex items-center justify-center" href={''}>Faild</Link>
                </div>

                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openIncome} className="text-naqibBlue w-full">
                        Income
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openTotalCash} className="text-naqibBlue w-full ">
                        Total_cash
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button onClick={openOutcome} className="text-naqibRed w-full">
                        Outcome
                    </button>
                </div>
                <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full  h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
                    <button className="text-naqibRed w-full ">
                        Logout
                    </button>
                </div>
            </div>

            {/* پاپ‌آپ Deposit */}
            <DepositPopup isOpen={isDepositPopupOpen} onClose={closeDepositPopup} />

            <Exchanges
                isOpen={isExchangePopupOpen}
                onClose={closeExchangePopup}
            />
            <TransactionMoney
                isOpen={isTransactionPopupOpen}
                onClose={closeTransactionPopup}
            />
            <Hawala
                isOpen={isHawalaPopupOpen}
                onClose={closeHawalaPopup}
            />
            <AddCustomer
                isOpen={isCustomerPopupOpen}
                onClose={closeCustomerPopup}
            />
            <Outcome
                isOpen={isOutcomePopupOpen}
                onClose={closeOutcomePopup}
            />
            <Income
                isOpen={isIncomePopupOpen}
                onClose={closeIncomePopup}
            />
            <TotalCash
                isOpen={isTotalCashPopupOpen}
                onClose={closeTotalCashPopup}
            />

        </nav>
    );
};

export default Navbar;

































//orgin one
// 'use client'

// import Link from 'next/link';
// import { useState } from 'react';
// import { HiMenu } from 'react-icons/hi';
// import { MdClose } from "react-icons/md";
// import Exchanges from './Exchanges';
// import TransactionMoney from './TransactionMoney';
// import Hawala from './Hawala';
// import AddCustomer from './AddCustomer';
// import DepositPopup from './DepositPopup';
// import Outcome from './Outcome';
// import Income from './Income';
// import TotalCash from './TotalCash';





// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDepositPopupOpen, setIsDepositPopupOpen] = useState(false);
//     const [isExchangePopupOpen, setIsEchangePopupOpen] = useState(false);



//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const openDepositPopup = () => {
//         setIsDepositPopupOpen(true);
//         setIsOpen(false);
//     };

//     const closeDepositPopup = () => {
//         setIsDepositPopupOpen(false);
//     };



//     const openExchange = () => {
//         setIsEchangePopupOpen(true);
//         setIsOpen(!isOpen);

//     }
//     const closeExchangePopup = () => {
//         setIsEchangePopupOpen(false)
//     }



//     const [isTransactionPopupOpen, setIsTransactionPopupOpen] = useState(false);
//     const openTransaction = () => {
//         setIsTransactionPopupOpen(true)
//         setIsOpen(!isOpen)
//     }
//     const closeTransactionPopup = () => {
//         setIsTransactionPopupOpen(false)
//     }


//     const [isHawalaPopupOpen, setIsHawalaPopupOpen] = useState(false)
//     const openHawala = () => {
//         setIsHawalaPopupOpen(true)
//         setIsOpen(!open)
//     }
//     const closeHawalaPopup = () => {
//         setIsHawalaPopupOpen(false)
//     }

//     const [isCustomerPopupOpen, setIsCustomerPopupOpen] = useState(false)
//     const openCustomer = () => {
//         setIsCustomerPopupOpen(true)
//         setIsOpen(!open)
//     }
//     const closeCustomerPopup = () => {
//         setIsCustomerPopupOpen(false)
//     }


//     const [isOutcomePopupOpen, setIsOutcomePopupOpen] = useState(false)
//     const openOutcome = () => {
//         setIsOutcomePopupOpen(true)
//         setIsOpen(!open)
//     }
//     const closeOutcomePopup = () => {
//         setIsOutcomePopupOpen(false)
//     }


//     const [isIncomePopupOpen, setIsIncomePopupOpen] = useState(false)
//     const openIncome = () => {
//         setIsIncomePopupOpen(true)
//         setIsOpen(!open)
//     }
//     const closeIncomePopup = () => {
//         setIsIncomePopupOpen(false)
//     }



//     const [isTotalCashPopupOpen, setIsOpenTotalCash] = useState(false)
//     const openTotalCash = () => {
//         setIsOpenTotalCash(true)
//         setIsOpen(!open)
//     }
//     const closeTotalCashPopup = () => {
//         setIsOpenTotalCash(false)
//     }



//     return (
//         <nav className="">

//             <div className='md:hidden bg-naqibBlue text-varWhite p-4 flex justify-between items-center'>
//                 <div className="text-xl font-bold pl-4">EXCHANCH</div>

//                 <div onClick={toggleMenu} className="md:hidden">
//                     <button>
//                         {isOpen ? <MdClose className='text-naqibRed' size={28} /> : <HiMenu size={28} />}
//                     </button>
//                 </div>


//                 <div
//                     className={`fixed top-0 right-0 h-full w-2/3 bg-naqibBlue z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
//                         } transition-transform duration-300 ease-in-out md:hidden`}
//                 >
//                     <div onClick={toggleMenu} className="md:hidden p-4">
//                         <button className='bg-varWhite rounded-full'>
//                             {isOpen ? <MdClose className='text-naqibRed' size={28} /> : <HiMenu size={28} />}
//                         </button>
//                     </div>
//                     <ul className="p-6 space-y-4">

//                         <li>
//                             <button onClick={openDepositPopup} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Deposit/Withdraw
//                             </button>
//                         </li>

//                         <li>
//                             <button onClick={openExchange} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Exchange
//                             </button>
//                         </li>

//                         {/* <li>
//                             <button onClick={openTransaction} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Transaction
//                             </button>
//                         </li> */}

//                         <li>
//                             <button onClick={openHawala} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Hawala
//                             </button>
//                         </li>

//                         <li>
//                             <button onClick={openCustomer} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Customer
//                             </button>
//                         </li>

//                         <li>
//                             <button onClick={openOutcome} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Outcome
//                             </button>
//                         </li>
//                         <li>
//                             <button onClick={openIncome} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Income
//                             </button>
//                         </li>
//                         <li>
//                             <button onClick={openTotalCash} className="text-varWhite hover:text-naveBarHoverText w-full text-right">
//                                 Total_cash
//                             </button>
//                         </li>

//                         <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Faild</Link></li>
//                         <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Backup</Link></li>
//                         <li><Link href="#" onClick={toggleMenu} className="block w-full text-right">Logout</Link></li>
//                     </ul>
//                 </div>
//             </div>


//             <div className="hidden md:grid md:grid-cols-3 gap-1 ml-4 lg:hidden">

//                 <div className="flex  shadow-xl bg-bgNaveBarHover w-full p-2 h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
//                         Deposit/withDraw
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openExchange} className="text-naqibBlue  w-full ">
//                         Exchange
//                     </button>
//                 </div>
//                 {/* <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openTransaction} className="text-naqibBlue w-full ">
//                         Transaction
//                     </button>
//                 </div> */}
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openHawala} className="text-naqibBlue w-full ">
//                         Hawala
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openCustomer} className="text-naqibBlue w-full ">
//                         Customer
//                     </button>
//                 </div>


//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openIncome} className="text-naqibBlue w-full">
//                         Income
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openTotalCash} className="text-naqibBlue w-full ">
//                         Total_cash
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-[#d4d9e8]">
//                     <button onClick={openOutcome} className="text-naqibRed w-full">
//                         Outcome
//                     </button>
//                 </div>
//                 <div className="flex shadow-xl bg-bgNaveBarHover w-full h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button className="text-naqibRed w-full ">
//                         Logout
//                     </button>
//                 </div>
//             </div>





//             <div className='hidden lg:flex gap-4'>

//                 <div className="flex ml-4 flex-col shadow-xl bg-bgNaveBarHover w-[150px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openDepositPopup} className="text-[#1c58dd] w-full h-full">
//                         Deposit/withDraw
//                     </button>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openExchange} className="text-naqibBlue  w-full ">
//                         Exchange
//                     </button>
//                 </div>
//                 {/* <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openTransaction} className="text-naqibBlue w-full">
//                         Transaction
//                     </button>
//                 </div> */}
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openHawala} className="text-naqibBlue w-full">
//                         Hawala
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openCustomer} className="text-naqibBlue w-full ">
//                         Customer
//                     </button>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <Link className="text-naqibBlue  w-full h-full flex items-center justify-center" href={''}>Faild</Link>
//                 </div>

//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openIncome} className="text-naqibBlue w-full">
//                         Income
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openTotalCash} className="text-naqibBlue w-full ">
//                         Total_cash
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button onClick={openOutcome} className="text-naqibRed w-full">
//                         Outcome
//                     </button>
//                 </div>
//                 <div className="flex flex-col shadow-xl bg-bgNaveBarHover w-[100px] h-12 text-center justify-center rounded-b-2xl hover:bg-minueBarHaver">
//                     <button className="text-naqibRed w-full ">
//                         Logout
//                     </button>
//                 </div>
//             </div>

//             {/* پاپ‌آپ Deposit */}
//             <DepositPopup isOpen={isDepositPopupOpen} onClose={closeDepositPopup} />

//             <Exchanges
//                 isOpen={isExchangePopupOpen}
//                 onClose={closeExchangePopup}
//             />
//             <TransactionMoney
//                 isOpen={isTransactionPopupOpen}
//                 onClose={closeTransactionPopup}
//             />
//             <Hawala
//                 isOpen={isHawalaPopupOpen}
//                 onClose={closeHawalaPopup}
//             />
//             <AddCustomer
//                 isOpen={isCustomerPopupOpen}
//                 onClose={closeCustomerPopup}
//             />
//             <Outcome
//                 isOpen={isOutcomePopupOpen}
//                 onClose={closeOutcomePopup}
//             />
//             <Income
//                 isOpen={isIncomePopupOpen}
//                 onClose={closeIncomePopup}
//             />
//             <TotalCash
//                 isOpen={isTotalCashPopupOpen}
//                 onClose={closeTotalCashPopup}
//             />

//         </nav>
//     );
// };

// export default Navbar;









