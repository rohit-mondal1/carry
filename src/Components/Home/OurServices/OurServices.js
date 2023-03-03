import React from 'react';
import {BiHomeSmile} from "react-icons/bi"

const OurServices = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
           <div className='bg-teal-900 text-white p-5 rounded-md'>
            <BiHomeSmile className='text-6xl'/>
            <h1 className='text-2xl font-semibold my-3'>Buy From Home</h1>
            <p className='text-base '>we sell our products online and you can buy a products from home.</p>
            <button className='btn bg-blue-600 px-4 mt-6'>see mor...</button>
           </div>
           <div className='bg-slate-900 text-white p-5 rounded-md'>
            <BiHomeSmile className='text-6xl'/>
            <h1 className='text-2xl font-semibold my-3'>Buy From Home</h1>
            <p className='text-base '>we sell our products online and you can buy a products from home.</p>
            <button className='btn  mt-6 bg-blue-600 px-4'>see mor...</button>
           </div>
           <div className='bg-teal-900 text-white p-5 rounded-md'>
            <BiHomeSmile className='text-6xl'/>
            <h1 className='text-2xl font-semibold my-3'>Buy From Home</h1>
            <p className='text-base '>we sell our products online and you can buy a products from home.</p>
            <button className='btn bg-blue-600 px-4 mt-6'>see mor...</button>
           </div>
        </div>
    );
};

export default OurServices;