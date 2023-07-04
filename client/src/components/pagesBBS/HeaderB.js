import { NavLink } from "react-router-dom"
import { useState } from "react"

function HeaderB(){

    const[isMenuOpen, setMenuOpen] = useState(false);
    
   const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
   }

    return <div>

<nav className="bg-fuchsia-900 border-gray-200 light:bg-gray-900">
  <div className="max-w-screen flex flex-wrap items-center justify-between py-2 px-4 md:px-0 md:py-6">
    
        
        <NavLink to='/homeB' className="home self-center text-2xl ml-20 font-semibold whitespace-nowrap text-white block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white mdhover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">HomeBBS</NavLink>
    
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen} onClick={toggleMenu}>
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}>
      <ul className="dropDown font-medium mr-20 flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-20 md:mt-0 md:border-0">
      <li>
          <NavLink to='/profileB' className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white mdhover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Profile</NavLink>
        </li>
        <li>
          <NavLink to='/clientsB' className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white mdhover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Clients</NavLink>
        </li>
        <li>
          <NavLink to='/mapB' className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white mdhover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Map</NavLink>
        </li>
        <li>
          <NavLink to='/' className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white mdhover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Logout</NavLink>
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