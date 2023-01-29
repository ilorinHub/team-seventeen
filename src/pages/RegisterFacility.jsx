import React from 'react'
import Header from '../components/Header'
import OnBoarding1 from '../components/OnBoarding1'

const RegisterFacility = ({data}) => {
  return (
    <div className="flex flex-col px-8">
      <Header link="/login" text="Login"/>
      <OnBoarding1/>
    </div>
  )
}

export default RegisterFacility