import React from "react";
import HeaderB from "./HeaderB";
import ProfileTemplate from "../ProfileTemplate";
function HomeB() {

  return (
    <div className="bg-rose-200 ">
      <HeaderB/>

      <div className='grid 2xl:grid-cols-12 xl:grid-cols-12  lg:grid-cols-12 md:grid-cols-11 sm:grid-cols-11 grid-cols-12 justify-between'>
                <div
                    className="2xl:col-start-4 2xl:col-span-6 xl:col-start-4 xl:col-span-6 lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-9 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 flex flex-row  rounded-lg align-center bg-white md:mt-5 mt-2 justify-evenly  items-center">
                    <h1 className="md:my-5 my-2 md:text-3xl text-lg text-center">
                        Babysitter Listings for Zone Name
                    </h1>
                  
                   
                </div>
            </div>











      <div className="bg-rose-200 min-h-screen grid grid-cols-12 justify-center  ">
    
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
      <ProfileTemplate/>
     
      </div>
    </div>
  );
}

export default HomeB;