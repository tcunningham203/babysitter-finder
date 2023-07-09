import React from "react";
import HeaderB from "./HeaderB";
import ProfileTemplate from "../ProfileTemplate";

function HomeB() {

  return (
    <div className="bg-slate-200 min-h-screen pt-16 sm:pt-20 md:pt-24 ">
      <HeaderB />
    

      <div className=' justify-between z-10'>
        <div
          className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
          <h1 className=" xl:text-7xl lg:text-6xl px-1 md:text-4xl text-3xl text-center font-medium ">
            Babysitters in
          </h1>  <h1 className="xl:text-7xl lg:text-6xl px-1 md:text-4xl text-3xl text-center font-bold">
            Upper Manhattan
          </h1>


        </div>
      </div>








      <div className="    justify-center z-10 ">

                <div className="  flex flex-wrap justify-center 2xl:mx-60 z-10 ">

         

            <ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate /><ProfileTemplate />

          
        </div>
      </div>

      
    </div>
  );
}

export default HomeB;