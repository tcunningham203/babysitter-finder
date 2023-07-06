import { NavLink } from "react-router-dom"
import { useState } from "react"
import BearIconSmall from "../BearIconSmall";

function HeaderP() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return <div>

    <nav className="bg-cyan-800  ">
      <div className="max-w-screen flex flex-row flex-wrap items-center justify-between py-2 px-4 md:px-0 md:py-6">
        <NavLink to='/homeP' className="  flex flex-row md:px-4 ">
          <BearIconSmall />
      
        <div className=" home align-center font-smart items-center text-center justify-center flex ps-2 pb-1 text-6xl   text-blue-200 "> Cub</div>
        <div className=" home align-center font-smart items-center text-center justify-center flex pb-1 text-6xl   text-rose-200 "> Care</div>
        </NavLink>
        <button data-collapse-toggle="navbar-default" type="button" className="  inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded={isMenuOpen} onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}>
          <ul className="dropDown  font-medium mr-20 flex flex-col font-neat p-4 md:p-0 mt-4 md:flex-row md:space-x-16 md:mt-0 md:border-0">
            <li>
              <NavLink to='/profileP' className="text-rose-200 hover:text-blue-100 active:text-blue-50 lg:text-5xl md:text-xl items-center justify-center flex align-center">Profile</NavLink>
            </li>
            <li>
              <NavLink to='/clientsP' className="text-rose-200 hover:text-blue-100 active:text-white lg:text-5xl md:text-xl items-center justify-center flex align-center">Clients</NavLink>
            </li>
            <li>
              <NavLink to='/mapP' className="text-rose-200 hover:text-blue-200 active:text-blue-50 lg:text-5xl md:text-xl items-center justify-center flex align-center">Map</NavLink>
            </li>
            <li>
              <NavLink to='/' className="text-rose-200 hover:text-blue-200 active:text-blue-50 lg:text-5xl md:text-xl items-center justify-center flex align-center">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </div>
}



export default HeaderP;

// {/* <h1 classNameNameName="bg-red-200">BabySitter App Header</h1>
//         <nav>NAV BAR PLACEHOLDER LINKS WHICH DISPLAY IF LOGGED IN:
//             <NavLink to='/home'>---------- Home ----------</NavLink>
//             <NavLink to='/map'>---------- Map ----------</NavLink>
//             <NavLink to='/bookmarks'>---------- Bookmarks ----------</NavLink>
//         </nav> */}