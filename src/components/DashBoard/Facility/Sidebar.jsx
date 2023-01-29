import React,{useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom';
import { facilityLinks } from '../../../data/links';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    // const [screenSize, setScreenSize] = useState(undefined);

    // useEffect(() => {
    //     const handleResize = () => {
    //       setScreenSize(window.innerWidth)
    //     }
    //     window.addEventListener('resize', handleResize);
    //     handleResize();
    //     return () => window.removeEventListener('resize', handleResize)
    //   }, [])

  
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
    return (
      <div className='h-screen  overflow-auto md:hoverflow-auto pb-10 bg-primary w-[200px]'>
        {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/"
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <span>KwaCare</span>
            </Link>
            <button type="button" onClick={()=> {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            </button>
          </div>
          <div className='mt-10 '> 
                  {facilityLinks.map((link) => (
                    <NavLink to={`/dashboard/facility/${link.link.toLowerCase()}`}
                              key={link.name}
                              className={({isActive}) => isActive ? activeLink : normalLink}>
                                <span className="capitalize text-white">
                                  {link.name}
                                </span>
                    </NavLink>
                  ))}
          </div>
          </>)}
      </div>
    )
  }
  
  export default Sidebar
