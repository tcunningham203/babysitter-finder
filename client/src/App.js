import Map from "./components/Map";
import './App.css';
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home/>
      


{/* this is the map file you see when you open the page. it is only here for now, we should move it eventually, I just wanted to get it working.*/}
      <Map />


{/* the rest of this stuff came default with the app install */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
