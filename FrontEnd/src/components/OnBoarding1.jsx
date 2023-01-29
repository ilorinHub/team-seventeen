import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const OnBoarding1 = (props) => {
  return (Layout (
    <div className="flex justify-center items-center text-left w-full py-8">
      <div id="form" className="block bg-white p-6 rounded-xl max-w-[450px]">
        <div>

        <h1 className='mb-8 text-[25px] font-bold font-serif'>Tell Us About Your Facility</h1>
        </div>
        <form action="/dashboard/facility/"> 

          <label htmlFor="fname" className="text-inputlabeltext font-normal">Facility Name *</label>
          <input type="text" placeholder='Enter Facility name' id='fname'
            className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />

          <label htmlFor="address" className="text-inputlabeltext font-normal">Facility Address *</label>
          <input type="text" placeholder='Enter your address' id='address' name='faddress'
            className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />

          <div id="fullName" className="flex flex-row mb-3">
            <div id="state" className="w-1/2 mr-1">
              <label htmlFor="state" className="text-inputlabeltext font-normal">State *</label>
              <input type="text" name="state" id="" value="Kwara State"
               className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5" />
            </div>

            <div id="lga" className="w-1/2 mr-1">
              <label htmlFor="lga" className="text-inputlabeltext font-normal">LGA *</label>
              <input type="text" name="lga" id="lga" placeholder='Enter your LGA' className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5"  />
            </div>
          </div>

            <label htmlFor='medical-licence' className="text-inputlabeltext font-normal">Medical License Number *</label>
            <input type="text" name='medical-licence' placeholder='Enter license number' id='medical-licence'
            className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

          <label htmlFor="email" className="text-inputlabeltext font-normal">Email *</label>
                <input type="email" name="email" id="email"
                placeholder="Your Email"
                    className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

            <label htmlFor="tel" className="text-inputlabeltext font-normal">Phone Number *</label>
            <input type="tel" name='tel' placeholder="Your Phone Number" className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

          <label htmlFor="password" className="text-inputlabeltext font-normal">Password *</label>
                <input type="password" name="password" id="password"
                placeholder='Password'
                   className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

                <label htmlFor="confirmPassword" className="text-inputlabeltext font-normal">Confirm Password *</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password'
                    className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5"/>

                <input type="submit" id="signUp"
                    className="bg-primary w-full h-10 cursor-pointer text-white rounded-md hover:transparency-80 hover:outline  outline-offset-2 text-sm mt-6"/>

<p className="text-sm text-center my-2 ">By signing in you are agreeing to our<a href="#" class="text-primary">Terms of Use</a> and<a href="#" class="text-blue-600"> Privacy Policy</a></p>
        </form>
      </div>
    </div>)
  )   
}

export default OnBoarding1