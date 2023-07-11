import React from "react";
import Auth from "../../utils/auth";
import LandingPage from "./LandingPage"

function Contacts () {
    if (Auth.loggedIn()) {
        return (
        <div className="bg-green-200">
    
    <h1>PNT Your starred sitters</h1>
    {/* create card component
    maybe have cards on home page also used here */}

    </div>
    )
} else {
    return (
      <LandingPage/>
    )
  }
}

export default Contacts;