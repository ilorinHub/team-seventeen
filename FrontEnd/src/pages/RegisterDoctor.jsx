import React from 'react'
import Header from '../components/Header'

const RegisterDoctor = () => {
    return (
        <div className="flex flex-col px-8">
        <Header link="/login" text="Login"/>
        <div className="flex justify-center items-center text-left w-full py-8">
          <div id="form" className="block bg-white p-6 rounded-xl max-w-[450px]">
            <form action="/dashboard/provider/">    
            <label htmlFor="fname" className="text-inputlabeltext font-semibold">Facility Name *</label>
          <input type="text" placeholder='Enter Facility name' id='fname' name='fname'
            className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />
    
                <label htmlFor='MDCN' className="text-inputlabeltext font-semibold">MDCN Folio Number *</label>
                <input type="text" placeholder='Enter your MDCN number' id='' name='MDCN'
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

                <label htmlFor='fullname' className="text-inputlabeltext font-semibold">Full Name *</label>
                <input type="text" placeholder='Enter your full name' id='' name='fullname'
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
    
              <label htmlFor="email" className="text-inputlabeltext font-semibold">Email Address*</label>
                    <input type="email" name="email" id="email"
                    placeholder='Enter your Email'
                        className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
    
                <label htmlFor="tel" className="text-inputlabeltext font-semibold">Phone Number *</label>
                <input type="tel" name='tel' placeholder='Enter your phone number' className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5" />
    
              <label htmlFor="password" className="text-inputlabeltext font-semibold">Password *</label>
                    <input type="password" name="password" placeholder='Password' id="password"
                       className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>
    
                    <label htmlFor="confirmPassword" className="text-inputlabeltext font-semibold">Confirm Password *</label>
                    <input type="password" name="confirmpassword"  placeholder='Confirm password' id="confirmPassword"
                        className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mt-1.5"/>
    
                    <input type="submit" id="signUp"
                        className="bg-primary w-full h-10 cursor-pointer text-white rounded-md hover:transparency-80 hover:outline  outline-offset-2 text-sm mt-6"/>
                <p className="text-sm text-center my-2 ">By signing in you are agreeing to our<a href="#" class="text-primary">Terms of Use</a> and<a href="#" class="text-blue-600"> Privacy Policy</a></p>
            </form>
          </div>
        </div>
        </div>

        )
}

export default RegisterDoctor