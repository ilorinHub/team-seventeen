import React from 'react'
import Header from '../components/Header'

const EmailConfirm = () => {
  return (
    <div className='h-[100vh] px-8'>
        <Header link="/" text="Close"/>
        <div className="flex items-center justify-center p-auto h-[80%]">
        <div className="flex flex-col items-center justify-center p-4 max-w-[400px]">
            <h1 className="text-primary text-bold font-bold text-[25px]">We Sent You An Email
            </h1>
            <p>Enter the verification code sent to your email address <br /><span className="text-primary">saa******@gmail.com</span></p>
            <form action="">
            <div className="flex flex-row gap-x-2 pt-5">
                <input type="text" name="num1" maxLength={1} class="w-[60px] h-[60px] rounded" />
                <input type="text" name="num2" maxLength={1} class="w-[60px] h-[60px] rounded" />
                <input type="text" name="num3" maxLength={1} class="w-[60px] h-[60px] rounded" />
                <input type="text" name="num4" maxLength={1} class="w-[60px] h-[60px] rounded" />
                <input type="text"  name="num5" maxLength={1} class="w-[60px] h-[60px] rounded" />
            </div>

                <input type="submit" value="Verify" className="text-slate-100 bg-primary text-bold font-bold w-[100%] mt-5 py-2.5 rounded"/>
            </form>
            <p className="mt-2">Resend OTP in <span className="text-primary font-bold ">4:00sec</span></p>
        </div>

        </div>
      </div>
  )
}

export default EmailConfirm