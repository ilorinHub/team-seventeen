import React from 'react'
import Sidebar from './Sidebar'


const Layout = (content) => {
  return (
    <div  className="w-full flex">
        <Sidebar/>
        {content}
    </div>
  )
}

export default Layout