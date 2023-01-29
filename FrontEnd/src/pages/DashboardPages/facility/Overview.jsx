import React from 'react'
import Layout from '../../../components/DashBoard/Facility/Layout'
import HospitalSurvey from './OverviewComponents/HospitalSurvey'
import LabOverview from './OverviewComponents/LabOverview'
import AppointmentCal from './OverviewComponents/AppointmentCal'
import PatientVisit from './OverviewComponents/PatientVisit'
import PatientOverview from './OverviewComponents/PatientOverview'

const Overview = () => {
  return Layout(
    <div className=' w-full'>
      <div className='flex justify-between p-5'>
        <h1 className='font-libreBaskerville font-semibold'>Overview</h1>
        <div className='float-left'>
          <button
            className='bg-primary rounded px-5
        py-2 text-bold drop-shadow-xs text-sm font-bold text-white'
          >
            Add New Patient
          </button>
        </div>
      </div>

      <div className='container mb-4 grid grid-cols-2 gap-4'>
        <div id='upperGrid'>
          <div className='container mx-auto mb-4 grid grid-cols-2 gap-4'>
            <div className='flex'>
              <HospitalSurvey />
              <LabOverview />
            </div>
          </div>

          <div id='lowerGrid'>
            <div className='container mx-auto mb-4 grid grid-cols-2 gap-4'>
              <div className='flex'>
                <PatientVisit />
                <PatientOverview />
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <AppointmentCal />
        </div>
      </div>
    </div>
  )
}

export default Overview


//  <div className='grid grid-flow-col gap-3 '>
//           {/* <HospitalSurvey />
//         <LabOverview /> */}
//           <PatientVisit />
//           <HospitalSurvey />
//           {/* <AppointmentCal /> */}
//         </div>

//         <AppointmentCal />