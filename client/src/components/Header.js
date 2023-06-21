import { NavLink } from "react-router-dom"
function Header(){
    return <div>
        <h1>BabySitter App</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/map'>Map</NavLink>
        </nav>
    </div>
}


export default Header