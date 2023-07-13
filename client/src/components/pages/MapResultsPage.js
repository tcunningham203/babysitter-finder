import React, { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import ProfileTemplate from "../templates/ProfileTemplate";
import Auth from "../../utils/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import {

  QUERY_BABYSITTERS,
} from "../../utils/queries";
import LandingPage from "./LandingPage";


const MapResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data: babysittersData, loading, refetch } = useQuery(QUERY_BABYSITTERS);
    const zone = decodeURIComponent(location.pathname.split('/')[2]);
    const filteredBabysitters = babysittersData?.babysitters.filter(
      (babysitter) => babysitter.zone === zone
    );
    useEffect(() => {
        // Update the URL and page title with the decoded zone
        const decodedZone = decodeURIComponent(zone);
        if (zone !== decodedZone) {
          navigate(`/results/${encodeURIComponent(decodedZone)}`);
          document.title = `Babysitters in ${decodedZone}`;
        } else {
          document.title = `Babysitters in ${zone}`;
        }
      }, [navigate, zone]);
    
      useEffect(() => {
        // Refetch babysitters when the zone changes
        refetch();
      }, [refetch, zone]);
    if (loading) {
      return <h1>Loading...</h1>;
    }

   
  

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

       

         
            <div className="flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word">
          
            <ProfileTemplate babysitters={filteredBabysitters} zone={zone} />


                 
            </div>
         
        </div>
      );
    } else {
      return <LandingPage />;
    }
  }


export default MapResultsPage;
