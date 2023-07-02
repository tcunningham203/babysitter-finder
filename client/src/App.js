import './App.css';
import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import {Routes, NavLink, Route} from 'react-router-dom'
import Signup from "./components/NewUserQuiz/signup";
import Login from "./components/Login";
import Profile from "./components/pages/Profile"
import Bookmarks from "./components/pages/Bookmarked"
import BabySitterQuestions from './components/NewUserQuiz/BabysitterQ';
import ParentQuestions from './components/NewUserQuiz/ParentQ';

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
  <Route path="/signupbsq" element={<BabySitterQuestions />}/>
  <Route path="/signuppq" element={<ParentQuestions />}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/bookmarks" element={<Bookmarks/>}/>
  <Route path="/profile" element={<Profile/>}/>
</Routes>
      

    </div>
  );
}

export default App;


