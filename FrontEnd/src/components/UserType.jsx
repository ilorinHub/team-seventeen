import React from 'react'
import { Link } from 'react-router-dom'
import {provider, client, facility} from "../assets"


const UserType = () => {
  return (
    <div className="flex items-center justify-center h-full  mb-10">
    <div className="flex items-center flex-col h-full pt-20 overflow-hidden w-[80%] justify-center">
    <h2 className="text-primary ss:text-[35px] pb-8">Welcome to KwaCare</h2>

    <div className="flex flex-col flex-wrap w-[70%] justify-center xs:flex-row  gap-10 ">
      <Link to="/register/client/">
      <div className="flex flex-col items-center ss:w-[300px] bg-white hover:bg-emerald p-2 basis-1/4 text-center h-[150px] justify-center rounded-lg">
        
        <img src={client} alt="client" className="w-[75px] pb-1"/>
        <span className="font-bold text-[15px]">Sign up to receive care</span>
      </div>
      </Link>
      <Link to="/register/provider/">
      <div className="flex flex-col items-center ss:w-[300px] bg-white hover:bg-emerald p-2 text-center justify-center h-[150px] rounded-lg">
        <img src={provider} alt="provider" className="w-[75px] pb-1"/>
        <span className="font-bold text-[15px] ">SignUp as health care provider</span>
      </div>
      </Link>
      <Link to="/register/facility/">
      <div className="flex flex-col items-center ss:w-[300px] bg-white hover:bg-emerald p-2 text-center h-[150px] justify-center rounded-lg">
        <img src={facility} alt="client" className="w-[75px] pb-1"/>
        <span className="font-bold text-[15px] ">SignUp as health care health care Facility</span>
      </div>
      </Link>

    </div>

    </div>
    </div>

  )
}

export default UserType