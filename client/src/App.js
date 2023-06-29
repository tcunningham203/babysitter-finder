import './App.css';
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import {Routes, NavLink, Route} from 'react-router-dom'
import Signup from "./components/NewUserQuiz/signup";
import Login from "./components/Login";
import Bookmarks from "./components/pages/Bookmarked"
import BabysitterQ0 from './components/NewUserQuiz/BabysitterQ0';
import BabysitterQ1 from './components/NewUserQuiz/BabysitterQ1';
import ParentQ0 from './components/NewUserQuiz/ParentQ0';

function App() {
  return (
    <div className="App">
--- TEST LINKS ONLY! --- IGNORE THIS WHITE STRIP WHEN DOING CSS. ---
<NavLink to='/login'>| Login |</NavLink>
<NavLink to='/signup'>| Signup |</NavLink>
<NavLink to='/home'>| Home |</NavLink>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/map" element={<Map />}/>
  <Route path="/signupbsq/0" element={<BabysitterQ0 />}/>
  <Route path="/signupbsq/1" element={<BabysitterQ1 />}/>
  <Route path="/signuppq/0" element={<ParentQ0 />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/bookmarks" element={<Bookmarks/>}/>
</Routes>
      

    </div>
  );
}

export default App;


