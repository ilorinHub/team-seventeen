import React,{useState} from 'react'
import Header from '../components/Header'
import ShowPassword from '../hooks/showPassword'

 
const Login = () => {

  return (
    <div className='px-8'>
        <Header link="/" text="Register"/>
        <div className="flex justify-center items-center text-left w-full py-8 px-8">
      <div id="form" className="block bg-white p-6 rounded-xl max-w-[450px]">
        <form action="">  

          <label htmlFor="email" className="text-inputlabeltext font-normal">Email</label>
                <input type="email" name="email" id="email"
                    className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-lightgreen outline-primary mb-3 mt-1.5"/>

          <label htmlFor="password" className="text-inputlabeltext font-normal">Password</label>
                {<ShowPassword/>}

                <input type="submit" id="signUp"
                    className="bg-primary w-full h-10 cursor-pointer text-white rounded-md hover:transparency-80 hover:outline  outline-offset-2 text-sm mt-6"/>

<p className="text-sm text-center my-2 ">By signing in you are agreeing to our<a href="#" class="text-primary">Terms of Use</a> and<a href="#" class="text-blue-600"> Privacy Policy</a></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login