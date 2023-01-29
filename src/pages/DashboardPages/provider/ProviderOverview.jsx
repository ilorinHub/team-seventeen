import React from 'react'
import Layout from '../../../components/DashBoard/provider/Layout'
import RecordsOverview from './ProviderOverViewComponent/RecordsOverview/App'
import MyAppointments from './ProviderOverViewComponent/MyAppointments/MyAppointments'
import PatientHistory from './ProviderOverViewComponent/PatientHistory/PatientHistory'
import RecentActivities from './ProviderOverViewComponent/RecentActivities/RecentActivies'


const ProviderOverview = () => {
  return ( Layout (

  <div className=' w-full flex fle-col p-4 flex-col gap-y-5 overflow-hidden'>
      <h1 className='font-libreBaskerville font-semibold'>Overview</h1>

    <div className='flex upperdiv gap-5 max-h-[50%] justify-center bg-slate-400 overflow-hidden'>
      <div className='flex flex-col gap-5 lefttopdiv'>
        <RecordsOverview/>
        <PatientHistory/>
      </div>
      <div className=''>
      <MyAppointments/>
      </div>
    </div>
    <div>
      <RecentActivities/>
    </div>

  </div>
  )
  )
}

export default ProviderOverview