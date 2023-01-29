import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center font-bold">

        <h1 className='text-[35px] text-'>Resource Not Found</h1>
        <Link to="/"><h1 className='text-xl mt-3 underline text-secondary'>Go back home</h1></Link>

    </div>
  )
}

export default PageNotFound