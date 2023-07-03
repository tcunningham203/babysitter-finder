import { useState } from "react";
import Header from "../Header";
import BearIcon from "../BearIcon";


function Home() {

  return (
    <div className="bg-blue-200">
      <Header/>
      
      <h1>Welcome to Babysitter App</h1>
      <BearIcon/>
    </div>
    
  );
}

export default Home;