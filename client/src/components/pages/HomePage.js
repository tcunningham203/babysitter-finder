import React from "react";
import { useQuery } from "@apollo/client";
import ProfileTemplate from "../templates/ProfileTemplate";
import Auth from "../../utils/auth";
import { getUserType } from "../../utils/helpers";
import {
  QUERY_MY_PROFILE_PARENT,
  QUERY_MY_PROFILE_BABYSITTER,
  QUERY_BABYSITTERS,
} from "../../utils/queries";
import LandingPage from "./LandingPage";
import NoProfileWarning from "../templates/NoProfileWarning";


function Home() {
 
  function ShowHome() {
    const { data: babysittersData, loading } = useQuery(QUERY_BABYSITTERS);
    const { data: profileData } = useQuery(
      getUserType() === "Parent"
        ? QUERY_MY_PROFILE_PARENT
        : QUERY_MY_PROFILE_BABYSITTER
    );

    if (loading) {
      return <h1>Loading...</h1>;
    }

    const userType = getUserType();
    const zone = profileData?.myProfileDetailParent?.zone || profileData?.myProfileDetailBabysitter?.zone;
    const filteredBabysitters = babysittersData?.babysitters.filter(
      (babysitter) => babysitter.zone === zone
    );

    if (Auth.loggedIn()) {
      return (
        <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24 ">
          
          <div className=" justify-between z-10">
            <div className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
              <h1 className=" xl:text-7xl lg:text-6xl px-2 md:text-4xl text-3xl text-center font-medium animate-fade-in-word">
                Babysitters in
              </h1>
              <h1 className="xl:text-7xl lg:text-6xl px-2 md:text-4xl text-3xl text-center font-bold animate-fade-in-word">
              {zone}
              </h1>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col rounded-lg align-center justify-center  items-center md:py-5 py-2 font-neat">
            <h1 className=" xl:text-3xl lg:text-6xl px-1 md:text-4xl text-3xl text-center font-medium animate-fade-in-word">Refer to the map page to see what zone you're in</h1>
          </div>

         
            <div className="flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word">
          
            <ProfileTemplate babysitters={filteredBabysitters} zone={zone} />


                 
            </div>
         
        </div>
      );
    } else {
      return <LandingPage />;
    }
  }
  return <div>{ShowHome()}</div>;
}

export default Home;
