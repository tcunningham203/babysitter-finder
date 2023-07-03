import './App.css';
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import {Routes, NavLink, Route} from 'react-router-dom'
import Signup from "./components/NewUserQuizBBS/signup";
import Login from "./components/Login";
import Profile from "./components/pages/Profile"
import Clients from './components/pages/Clients'
import Bookmarks from "./components/pages/Bookmarked"
import BabysitterQ0 from './components/NewUserQuizBBS/BabysitterQ0';
import BabysitterQ1 from './components/NewUserQuizBBS/BabysitterQ1';
import BabysitterQ2 from './components/NewUserQuizBBS/BabysitterQ2';
import BabysitterQ3 from './components/NewUserQuizBBS/BabysitterQ3';
import BabysitterQ4 from './components/NewUserQuizBBS/BabysitterQ4';
import BabysitterQ5 from './components/NewUserQuizBBS/BabysitterQ5';
import BabysitterQ6 from './components/NewUserQuizBBS/BabysitterQ6';
import BabysitterQ7 from './components/NewUserQuizBBS/BabysitterQ7';
import BabysitterQ8 from './components/NewUserQuizBBS/BabysitterQ8';
import BabysitterQ9 from './components/NewUserQuizBBS/BabysitterQ9';
import ParentQ0 from './components/NewUserQuizPNT/ParentQ0';
import ParentQ1 from './components/NewUserQuizPNT/ParentQ1';
import ParentQ2 from './components/NewUserQuizPNT/ParentQ2';
import ParentQ3 from './components/NewUserQuizPNT/ParentQ3';
import ParentQ4 from './components/NewUserQuizPNT/ParentQ4';
import ParentQ5 from './components/NewUserQuizPNT/ParentQ5';
import ParentQ6 from './components/NewUserQuizPNT/ParentQ6';
import ParentQ7 from './components/NewUserQuizPNT/ParentQ7';

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
  <Route path="/signupbsq/2" element={<BabysitterQ2 />}/>
  <Route path="/signupbsq/3" element={<BabysitterQ3 />}/>
  <Route path="/signupbsq/4" element={<BabysitterQ4 />}/>
  <Route path="/signupbsq/5" element={<BabysitterQ5 />}/>
  <Route path="/signupbsq/6" element={<BabysitterQ6 />}/>
  <Route path="/signupbsq/7" element={<BabysitterQ7 />}/>
  <Route path="/signupbsq/8" element={<BabysitterQ8 />}/>
  <Route path="/signupbsq/9" element={<BabysitterQ9 />}/>
  <Route path="/signuppq/0" element={<ParentQ0 />}/>
  <Route path="/signuppq/1" element={<ParentQ1 />}/>
  <Route path="/signuppq/2" element={<ParentQ2 />}/>
  <Route path="/signuppq/3" element={<ParentQ3 />}/>
  <Route path="/signuppq/4" element={<ParentQ4 />}/>
  <Route path="/signuppq/5" element={<ParentQ5 />}/>
  <Route path="/signuppq/6" element={<ParentQ6 />}/>
  <Route path="/signuppq/7" element={<ParentQ7 />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/bookmarks" element={<Bookmarks/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="clients" element={<Clients/>}/>
</Routes>
      

    </div>
  );
}

export default App;


