import React from "react";
import HeaderB from "./HeaderB";
import ProfileTemplate from "../ProfileTemplate";
import Skyline from "../Skyline";
function HomeB() {

  return (
    <div className="bg-slate-200 min-h-screen">
      <HeaderB />
      <Skyline/>

      <div className=' justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
                    <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium ">
                        Babysitters in
                    </h1>  <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-bold">
                        Upper Manhattan
                    </h1>


                </div>
            </div>








      <div className="  lg:grid lg:grid-cols-12  justify-center  ">


        <div className="   sm:grid col-start-0 col-span-12 lg:col-start-2 lg:col-span-10  justify-center  ">

          <div className="  grid grid-cols-12  justify-center z-10 ">

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
            <ProfileTemplate />
            <ProfileTemplate />
            <ProfileTemplate />
          </div>
        </div>
      </div></div>
  );
}

export default HomeB;