import { NavLink } from "react-router-dom"
function Header(){
    return <div className="bg-red-50">
        <h1 className="bg-red-200">BabySitter App Header</h1>
        <nav>NAV BAR PLACEHOLDER LINKS WHICH DISPLAY IF LOGGED IN:
            <NavLink to='/home'>---------- Home ----------</NavLink>
            <NavLink to='/map'>---------- Map ----------</NavLink>
            <NavLink to='/bookmarks'>---------- Bookmarks ----------</NavLink>
        </nav>
    </div>
}


export default Header