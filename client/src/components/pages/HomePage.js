import React from "react";

import ProfileTemplate from "../templates/ProfileTemplate";
import Auth from "../../utils/auth";

import LandingPage from "./LandingPage";
import NoProfileWarning from "../templates/NoProfileWarning";

function Home() {

  function showHome() {
    if (Auth.loggedIn()) {
      return (
        <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24 ">





<NoProfileWarning/>





          <div className=" justify-between z-10">
            <div className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
              <h1 className=" xl:text-7xl lg:text-6xl px-1 md:text-4xl text-3xl text-center font-medium animate-fade-in-word">
                Babysitters in
              </h1>{" "}
              <h1 className="xl:text-7xl lg:text-6xl px-1 md:text-4xl text-3xl text-center font-bold animate-fade-in-word">
                Upper Manhattan
              </h1>
            </div>
          </div>

          <div className="    justify-center z-10 ">
            <div className="  flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word ">
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
              <ProfileTemplate />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <LandingPage />
      )
    }
  }
  return (
    <div>
      {showHome()}
    </div>
  );
}

export default Home;
