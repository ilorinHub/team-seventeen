import React from "react";
import { graphReport } from "../../../../assets";

const LabOverview = () => {

// const chartOptions = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   tooltips: {
//     enabled: false,
//   },
//   elements: {
//     point: {
//       radius: 0,
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: false,
//         scaleLabel: false,
//         ticks: {
//           display: false,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: false,
//         scaleLabel: false,
//         ticks: {
//           display: false,
//           suggestedMin: 0,
//           suggestedMax: 10,
//         },
//       },
//     ],
//   },
// }
// //
// var ctx = document.getElementById('chart1').getContext('2d')
// var chart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: [1, 2, 1, 3, 5, 4, 7],
//     datasets: [
//       {
//         backgroundColor: 'rgba(101, 116, 205, 0.1)',
//         borderColor: 'rgba(101, 116, 205, 0.8)',
//         borderWidth: 2,
//         data: [1, 2, 1, 3, 5, 4, 7],
//       },
//     ],
//   },
//   options: chartOptions,
// })

 return (
   <div>
     <div className='my-0 p-4 rounded-lg shadow-lg bg-white w-64'>
        <div className='divide-y divide-solid'>
         <div className='flex justify-between'>
           <h5 className='text-gray-900 leading-tight font-medium mb-2'>
             Lab Overview
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
       </div>

       <div className='flex py-8'>
         <button
           type='button'
           className='inline-flex justify-center rounded-md border bg-emerald border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none '
           id='menu-button'
           aria-expanded='true'
           aria-haspopup='true'
         >
           Widal Test
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

       <div>
         {/* <div class='absolute bottom-0 inset-x-0'>
           <canvas id='chart1' height='70'></canvas>
         </div> */}

         {/* <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"> */}
         <div className=' w-[46%]'>
           <img src={graphReport} alt='' className='inline pb-1' />
         </div>
         {/* <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart1" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div> */}
       </div>
     </div>
   </div>
 )
}

export default LabOverview