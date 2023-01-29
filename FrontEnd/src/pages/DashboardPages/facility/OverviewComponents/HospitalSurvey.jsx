import React from 'react'

import {
  doctor,
  nurse,
  user,
  female,
  male,
  hospitalBed,
  hospBed,
} from '../../../../assets'

const HospitalSurvey = () => {

 return (
   <div>
     <div>
       <div className='my-0 mx-4 p-4 rounded-lg shadow-lg bg-white w-sm'>
         <div className='flex justify-between'>
           <h5 className='text-gray-900 leading-tight font-medium mb-2'>
             Hospital Survey
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

         <div>
           <div className='flex mt-5 justify-between'>
             <span className=''>
               <img src={doctor} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>128</span>
                 <br />
                 Total Doctors
               </p>
             </span>
             <span className=''>
               <img src={nurse} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>200</span>
                 <br />
                 Total Staffs
               </p>
             </span>
             <span className=''>
               <img src={hospitalBed} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>452</span>
                 <br />
                 Number of Beds
               </p>
             </span>
             <span className=''>
               <img src={hospBed} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>152</span>
                 <br />
                 Occupied Beds
               </p>
             </span>
           </div>

           <div className='flex mt-5 justify-between'>
             <span className=''>
               <img src={user} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>148</span>
                 <br />
                 New Patients
               </p>
             </span>
             <span className=''>
               <img src={nurse} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>2486</span>
                 <br />
                 Total Patients
               </p>
             </span>
             <span className=''>
               <img src={male} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>200</span>
                 <br />
                 Male Patients
               </p>
             </span>
             <span className=''>
               <img src={female} alt='' className='inline w-[38px] pb-1' />
               <p className='text-xs pb-2 m-0'>
                 <span className='font-bold text-sm'>2486</span>
                 <br />
                 Female Patients
               </p>
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}

export default HospitalSurvey