

'use client'
import React from 'react';

interface DepositpopupType {
    isOpen: boolean,
    onClose: () => void;
}

export const DepositPopup = ({ isOpen, onClose }: DepositpopupType) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full">
            {/* پس‌زمینه کدر */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* محتوای پاپ‌آپ */}

            <div

                className="  flex flex-col bg-varWhite bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 pt-2  w-full mx-4 border border-varWhite border-opacity-30 transform transition-all duration-300 scale-95 animate-in fade-in-50 slide-in-from-bottom-5"
                onClick={(e) => e.stopPropagation()} >

                <div className='flex items-center justify-between '>
                    <button
                        onClick={onClose}
                        className=" text-naqibRed text-4xl font-bold -mt-4  "
                    >
                        ×
                    </button>

                    <h2 className="text-2xl font-bold text-popupText mb-4">Deposit</h2>
                </div>

                <div className='flex w-full gap-4 items-center justify-center'>
                    <h1 className='w-full lg:pr-10 lg:pl-10'>00000</h1>
                    <h1 className='w-full'>موجودی حساب رسیدگی</h1>
                    <h1 className='w-full'>00000</h1>
                    <h1 className='w-full'>موجودی حساب بردگی</h1>
                </div>



                <form action="">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w- h-full gap-4 items-center '>
                        <div>
                            <label htmlFor="Date">تاریخ : </label>
                            <input id='Date' type="date" className='w-full p-2 rounded-md' />
                        </div>
                        <div className=''>
                            <label >currency : </label>
                            <select className='w-full p-2 rounded-md' name="" id="">
                                <option value="">دالر</option>
                                <option value="">افغانی</option>
                                <option value="">کلدار</option>

                            </select>
                        </div>
                        <div>
                            <label >نوع رسید </label>
                            <select className='w-full p-2 rounded-md' name="" id="">
                                <option value="">--null--</option>
                                <option value="">رسیدگی</option>
                                <option value="">بردگی</option>
                            </select>
                        </div>
                        <div>
                            <label >مبلغ : </label>
                            <input className='w-full p-2 rounded-md' id='Date' type="number" />
                        </div>
                        <div>
                            <label htmlFor="Date">توضیحات یاداشت : </label>
                            <textarea className='w-full p-2 rounded-md'></textarea>
                        </div>

                    </div>

                    <button className='bg-buttonColor w-full rounded-md text-varWhite font-bold p-2 mt-4 mb-2'>ثبت</button>

                </form>

            </div>
        </div>
    );
};

export default DepositPopup;

















//origin code
// 'use client'
// import React from 'react';

// interface DepositpopupType {
//     isOpen: boolean,
//     onClose: () => void;
// }

// export const DepositPopup = ({ isOpen, onClose }: DepositpopupType) => {
//     if (!isOpen) return null;


//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             {/* پس‌زمینه کدر */}
//             <div
//                 className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
//                 onClick={onClose}
//             ></div>

//             {/* محتوای پاپ‌آپ */}
//             <div
//                 className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 border border-white border-opacity-30 transform transition-all duration-300 scale-95 animate-in fade-in-50 slide-in-from-bottom-5"
//                 onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن وقتی روی خود پاپ‌آپ کلیک می‌شود
//             >
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
//                 >
//                     ×
//                 </button>

//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Deposit</h2>
//                 <p className="text-gray-600 mb-6">
//                     این بخش Deposit است. فرم واریز یا اطلاعات مربوط به Deposit در اینجا نمایش داده می‌شود.
//                 </p>

//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">مبلغ واریز</label>
//                         <input
//                             type="number"
//                             className="w-full p-2 border border-gray-300 rounded-lg"
//                             placeholder="مبلغ را وارد کنید"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">روش پرداخت</label>
//                         <select className="w-full p-2 border border-gray-300 rounded-lg">
//                             <option>کارت به کارت</option>
//                             <option>کیف پول دیجیتال</option>
//                             <option>رمز ارز</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="flex justify-end gap-3 mt-6">
//                     <button
//                         onClick={onClose}
//                         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//                     >
//                         انصراف
//                     </button>
//                     <button
//                         className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
//                     >
//                         تایید واریز
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DepositPopup;