import React from "react";
import { laptop, outgoing } from "../../../../assets";

const PatientOverview = () => {
 return (
   <div>
     <div className='my-0 px-2 pt-5 pb-12 rounded-lg shadow-lg bg-white w-[320px]'>
       <div className='flex justify-between'>
         <h5 className='text-gray-900 leading-tight font-medium mb-2'>
           Patient's Overview
         </h5>

         <div className='block'>
           <button
             type='button'
             className='inline-flex justify-center rounded-md border bg-emerald border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none '
             id='menu-button'
             aria-expanded='true'
             aria-haspopup='true'
           >
             This Month
             <svg
               className='-mr-1 ml-1 h-4 w-5'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
             >
               <path
                 fill-rule='evenodd'
                 d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                 clip-rule='evenodd'
               />
             </svg>
           </button>
         </div>
       </div>

       <div className="flex mb-5 mt-10">
         <div className='border-solid border-2 border-gray-500 rounded-lg shadow-lg mx-2 py-3'>
           <span className=''>
             <img src={laptop} alt='' className='inline w-[38px] pb-1' />
             <p className='text-xs pb-2 m-0'>
               Total Admitted Patients
               <br />
               <span className='font-bold text-sm'>114</span>
             </p>
           </span>
         </div>

         <div className='border-solid border-2 border-gray-500 rounded-lg shadow-lg mx-2 py-3'>
           <span className=''>
             <img src={outgoing} alt='' className='inline w-[38px] pb-1' />
             <p className='text-xs pb-2 m-0'>
               Total Discharged Patients
               <br />
               <span className='font-bold text-sm'>60</span>
             </p>
           </span>
         </div>

       </div>
     </div>
   </div>
 )
}

export default PatientOverview