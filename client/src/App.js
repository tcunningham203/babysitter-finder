import './App.css';
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import {Routes, NavLink, Route} from 'react-router-dom'
import Signup from "./components/NewUserQuiz/signup";
import Login from "./components/Login";
import Bookmarks from "./components/pages/Bookmarked"

function App() {
  return (
    <div className="App">
--- TEST LINKS ONLY IGNORE FOR LAYOUT PURPOSES ---
<NavLink to='/login'>| Login |</NavLink>
<NavLink to='/signup'>| Signup |</NavLink>
<NavLink to='/home'>| Home |</NavLink>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/map" element={<Map />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/bookmarks" element={<Bookmarks/>}/>
</Routes>
      

    </div>
  );
}

export default App;


