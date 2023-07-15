
import React from 'react'
import LandingPage from './LandingPage';
import Auth from "../../utils/auth";
import ParentContactInfo from '../templates/ParentInfoTemplate';
import { useQuery,useMutation } from "@apollo/client";
import { getUserType } from "../../utils/helpers";
import ProfileTemplate from '../templates/ProfileTemplate';
import { QUERY_INTERESTEDPARENTS } from '../../utils/queries';
import { QUERY_STARREDBABYSITTERS } from '../../utils/queries';

export default function Contacts() {
    const userType = getUserType();
    const { data, loading } = useQuery(userType==='Babysitter' ? QUERY_INTERESTEDPARENTS : QUERY_STARREDBABYSITTERS,{
      fetchPolicy: 'no-cache', // Disable caching
      context: {
              headers: {
                authorization: `${
                  Auth.getToken()||''
                }`,
              },
            },
      });
     
      if(loading){
       return (
          <h1>Loading...</h1>
         )
      }
  
    
    const parents = data?.interestedParents?.interestedParents || [];
    const babysitter=data?.starredBabysitters?.starredBabysitters||[];
    if (Auth.loggedIn()) {
    return (
        <div className="bg-slate-300 min-h-screen  pt-16 sm:pt-20 md:pt-24 z-10 ">
          

            <div className=' justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
                       {userType === "Babysitter" && (
                    <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium pb-24">
                        Interested parents are listed here.
                    </h1>  
                    )}
                    {userType === "Parent" && (
                    <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium pb-24">
                        Babysitter profiles you've liked. 
                    </h1>  
                     )}
                </div>
            </div>


            <div className="    justify-center z-10 ">

                
                {userType === "Babysitter" && (
                    <div className="  flex flex-wrap justify-center 2xl:mx-72 z-10 animate-fade-in-word ">
                    <ParentContactInfo parents={parents}/>
                    </div>
                    )}
               {userType === "Parent" && (
                <div className="  flex flex-wrap justify-center 2xl:mx-72 z-10 animate-fade-in-word ">
              <ProfileTemplate babysitters={babysitter}/> 
               </div>
               )}
                
            </div>
        </div>

    )

} else {
    return (
      <LandingPage/>
    )
  }
}

