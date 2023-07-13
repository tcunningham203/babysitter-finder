
import { NavLink } from "react-router-dom"
import React from 'react'
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import LandingPage from "./LandingPage";
import { getUserType } from "../../utils/helpers";
import { QUERY_MY_PROFILE_BABYSITTER, QUERY_MY_PROFILE_PARENT } from "../../utils/queries";
import ProfileTemplate from "../templates/ProfileTemplate";
import ParentContactInfo from "../templates/ParentInfoTemplate";


export default function Profile() {
      const userType = getUserType();
const { data, loading } = useQuery(userType==='Parent'?QUERY_MY_PROFILE_PARENT:QUERY_MY_PROFILE_BABYSITTER,{
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

  
    if (Auth.loggedIn()) {
        return (
        <div className="break-before-column bg-slate-300 min-h-screen z-10 font-cool pt-16 sm:pt-20 md:pt-24 ">
     
          
            <div className='justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 ">
                           {userType === "Babysitter" && (
                    <h1 className="lg:text-5xl px-1 md:text-4xl text-3xl text-center font-neat font-medium">
                        Here's how families see you.
                    </h1>
                    )}
                           {userType === "Parent" && (
                    <h1 className="lg:text-5xl px-1 md:text-4xl text-3xl text-center font-neat font-medium">
                        Here's what you send to babysitters.
                    </h1>
                    )}

                </div>
            </div>

            <div className="    justify-center z-10 ">

                <div className="  flex flex-wrap justify-center 2xl:mx-72 z-10 ">
                {userType === "Babysitter" && (
               <ProfileTemplate babysitters={data?.myProfileDetailBabysitter} zone={data?.myProfileDetailBabysitter?.zone} />
                    )} 
                    {userType === "Parent" && (
                    <ParentContactInfo parent={data?.myProfileDetailParent} />
                    )}
                </div>
            </div>



            <div className="flex flex-wrap justify-center 2xl:mx-72 z-20">
                <div className="flex flex-wrap justify-center sm:w-80 w-72 bg-white rounded-lg py-1 z-20">
                <NavLink to='/EditProfile' type="button" className="flex-col rounded bg-red-700  px-12 pb-2 pt-2.5  m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-red-800  focus:outline-none focus:ring-0 active:bg-red-950 text-xl xs:text-sm z-20">
                    Edit Profile
                </NavLink>
            </div>
            </div>
        </div>
    )
} else {
    return (
      <LandingPage/>
    )
  }
};

