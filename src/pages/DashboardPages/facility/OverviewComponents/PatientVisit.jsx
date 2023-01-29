import React from "react";
import { doughnut, greenMoon, skyMoon, deepMoon, emeraldMoon } from "../../../../assets";

const PatientVisit = () => {
 return (
   <div>
     <div className='my-0 mx-4 p-4 rounded-lg shadow-lg bg-white w-sm'>
       <div className='flex justify-between'>
         <h5 className='text-gray-900 leading-tight font-medium mb-2'>
           Patient Visit By Department
         </h5>

         <div className='block'>
           <button
             type='button'
             className='inline-flex justify-center rounded-md border bg-emerald border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none '
             id='menu-button'
             aria-expanded='true'
             aria-haspopup='true'
           >
             Paediatrics
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

       <div className='flex pt-5'>
         <img src={doughnut} alt='' className='w-[40%]' />
         <div className='text-left pl-10'>
           <ul>
             <li className='flex'>
               <span className='mr-2'>
                 <img src={skyMoon} alt='' className='' />
               </span>
               <p className='text-xs pb-2 m-0'>
                 New Patients <br />
                 <span className='font-bold text-sm'>12</span>
               </p>
             </li>
             <li className='flex'>
               <span className='mr-2'>
                 <img src={greenMoon} alt='' className='' />
               </span>
               <p className='text-xs pb-2 m-0'>
                 Admitted Patients <br />
                 <span className='font-bold text-sm'>26</span>
               </p>
             </li>
             <li className='flex'>
               <span className='mr-2'>
                 <img src={deepMoon} alt='' className='' />
               </span>
               <p className='text-xs pb-2 m-0'>
                 Injections <br />
                 <span className='font-bold text-sm'>32</span>
               </p>
             </li>
             <li className='flex'>
               <span className='mr-2'>
                 <img src={emeraldMoon} alt='' className='' />
               </span>
               <p className='text-xs pb-2 m-0'>
                 Active Surgeries <br />
                 <span className='font-bold text-sm'>8</span>
               </p>
             </li>
           </ul>
           <a href='#' className='text-xs'>
             Updated Lastweek
           </a>
         </div>
       </div>
     </div>
   </div>
 )
}

export default PatientVisit