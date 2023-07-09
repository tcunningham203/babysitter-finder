import { NavLink } from "react-router-dom"
import { useState } from "react"
import BearIconSmall from "../BearIconSmall";
import Clouds from "../clouds";
function HeaderB(){

    const[isMenuOpen, setMenuOpen] = useState(false);
    
   const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
   }

    return <div>

<nav className="bg-slate-600 z-20 fixed top-0 left-0 w-full "> 
<div className="relative z-10 "><Clouds/></div>
      <div className="bg-slate-600 max-w-screen flex flex-row flex-wrap items-center justify-between pt-2  md:px-0 md:py-6 z-10">
        <NavLink to='/homeB' className=" transition duration-150 hover:scale-105 active:scale-105  flex flex-row md:px-4 z-10 ms-4">
          <BearIconSmall />
     
        <div className=" home align-center font-smart items-center  justify-center flex ps-2 pb-1 text-6xl  z-10 text-blue-200 "> Cub</div>
        <div className=" home align-center font-smart items-center  justify-center flex pb-1 text-6xl   text-pink-200 z-10"> Care</div>
        </NavLink>
        <button data-collapse-toggle="navbar-default" type="button" className="z-10 bg-slate-800 me-6 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded={isMenuOpen} onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6 z-10 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"
          } z-10 md:bg-transparent bg-slate-600 w-full md:block md:w-auto`}>
          <ul className="z-10    font-medium grid grid-cols-2 md:grid-cols-4 md:pe-7 flex flex-col font-neat md:p-0 my-1 md:flex-row   md:border-0">
            <li>
              <NavLink to='/profileB' className="md:bg-transparent md:hover:bg-transparent hover:bg-slate-900 bg-slate-800 rounded my-1 md:my-0 mx-8 md:mx-8 text-white hover:text-blue-300 active:text-blue-400 lg:text-5xl md:text-xl text-4xl items-center justify-center flex align-center">Profile</NavLink>
            </li>
            <li>
              <NavLink to='/clientsB' className="md:bg-transparent md:hover:bg-transparent hover:bg-slate-900 bg-slate-800 rounded my-1 md:my-0 mx-8 md:mx-8 text-white hover:text-blue-300 active:text-blue-400 lg:text-5xl md:text-xl text-4xl items-center justify-center flex align-center">Clients</NavLink>
            </li>
            <li>
              <NavLink to='/mapB' className="md:bg-transparent md:hover:bg-transparent hover:bg-slate-900 bg-slate-800 rounded my-1 md:my-0 mx-8 md:mx-8 text-white hover:text-blue-300 active:text-blue-400 lg:text-5xl md:text-xl text-4xl items-center justify-center flex align-center">Map</NavLink>
            </li>
            <li>
              <NavLink to='/' className="md:bg-transparent md:hover:bg-transparent hover:bg-slate-900 bg-slate-800 rounded my-1 md:my-0 mx-8 md:mx-8 text-white hover:text-blue-300 active:text-blue-400 lg:text-5xl md:text-xl text-4xl items-center justify-center flex align-center">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </div>
}

   



export default HeaderB

// {/* <h1 classNameNameName="bg-red-200">BabySitter App Header</h1>
//         <nav>NAV BAR PLACEHOLDER LINKS WHICH DISPLAY IF LOGGED IN:
//             <NavLink to='/home'>---------- Home ----------</NavLink>
//             <NavLink to='/map'>---------- Map ----------</NavLink>
//             <NavLink to='/bookmarks'>---------- Bookmarks ----------</NavLink>
//         </nav> */}