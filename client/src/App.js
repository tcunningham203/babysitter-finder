import Map from "./components/Map";
import './App.css';
import Home from "./components/Home";
import Bookmarks from "./components/pages/Bookmarked";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/map" element={<Map />}/>
  <Route path="/bookmarks" element={<Bookmarks/>}/>
</Routes>
      
      


{/* this is the map file you see when you open the page. it is only here for now, we should move it eventually, I just wanted to get it working.*/}
      


{/* the rest of this stuff came default with the app install */}

    </div>
  );
}

export default App;
