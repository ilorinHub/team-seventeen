//@all pages should be imported here
//@also page routing should be done here

import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes, Switch  } from "react-router-dom";
import {Example} from '../redux/actions/actionCreators'
import Home from "./Home"
import RegisterFacility from './RegisterFacility';
import EmailConfirm from './EmailConfirm';
import Login from './Login';
import SuccessModal from '../components/SuccessModal';
import Dashboard from './Dashboard';
// facility
import HospitalRecords from './DashboardPages/facility/HospitalRecords';
import Overview from './DashboardPages/facility/Overview';
import PatientRecords from './DashboardPages/facility/PatientRecords';
import Appointments from './DashboardPages/facility/Appointments';
// client
import Profile from './DashboardPages/client/Profile';
import Prescriptions from './DashboardPages/client/Prescriptions';
import ClientHome from "./DashboardPages/client/ClientHome"
import ClientAppointments from './DashboardPages/client/ClientAppointments';
import MyRecords from './DashboardPages/client/MyRecords';
// provider
import ProviderAppointments from './DashboardPages/provider/ProviderAppointments';
import ProviderHospitalRecords from './DashboardPages/provider/ProviderHospitalRecords';
import ProviderOverview from './DashboardPages/provider/ProviderOverview';
import ProviderPatientsRecords from './DashboardPages/provider/ProviderPatientsRecords';
import ProviderPrescriptions from './DashboardPages/provider/ProviderPrescriptions'


import RegisterDoctor from './RegisterDoctor';
import RegisterClient from './RegisterClient';
import PageNotFound from './404';

//states in store are mapped to props here
//to be passed to component
const mapStateToProps = state => {
  return {
    data: state.Example
  }
}

//dispatch actions are mapped to props 
//to be pass as props to component
const mapDispatchToProps = (dispatch) => {
  return {
    example: () => {dispatch(Example())}
  }
}

//Container component
const Main = (props) => {

//  useEffect(() => {
//   example()
//  }, [])
 
  return (
    <div className='min-h-screen bg-slate-100'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/emailconfirm'
            element={<EmailConfirm data='client' />}
          />
          <Route path='/' element={<Home />} />
          <Route path='/register/'>
            <Route exact path='facility' element={<RegisterFacility  />}>
            </Route>
            <Route path='provider' element={<RegisterDoctor/>} />
            <Route path='client' element={<RegisterClient/>} />
          </Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/success' element={<SuccessModal />}></Route>
          <Route exact path='/dashboard/facility/' element={<Overview />}/>
          <Route exact path='/dashboard/facility/overview/' element={<Overview />}/>
          <Route exact path='/dashboard/facility/Appointments' element={<Appointments />}/>
          <Route exact path='/dashboard/facility/PatientsRecords' element={<PatientRecords />}/>
          <Route exact path='/dashboard/facility/HospitalsRecords' element={<HospitalRecords />}/>

          <Route exact path='/dashboard/client/' element={<ClientHome/>}/>
          <Route exact path='/dashboard/client/home' element={<ClientHome/>}/>
          <Route exact path='/dashboard/client/Appointments' element={<ClientAppointments/>}/>
          <Route exact path='/dashboard/client/Prescriptions' element={<Prescriptions/>}/>
          <Route exact path='/dashboard/client/MyRecords' element={<MyRecords/>}/>
          <Route exact path='/dashboard/client/Profile' element={<Profile/>}/>

          <Route exact path='/dashboard/provider/' element={<ProviderOverview/>}/>
          <Route exact path='/dashboard/provider/overview' element={<ProviderOverview/>}/>
          <Route exact path='/dashboard/provider/Appointments' element={<ProviderAppointments/>}/>
          <Route exact path='/dashboard/provider/Prescriptions' element={<ProviderPrescriptions/>}/>
          <Route exact path='/dashboard/provider/PatientsRecords' element={<ProviderPatientsRecords/>}/>
          <Route exact path='/dashboard/provider/HospitalRecords' element={<ProviderHospitalRecords/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)