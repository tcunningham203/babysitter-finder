import React from "react";


import HeaderB from "./HeaderB";
import ProfilePic from "../ProfilePic";
import "@firebase/storage";
function ProfileB() {

    return (
        <div className="bg-rose-100 h-screen ">
            <HeaderB />
            <div
                className=" flex lg:flex-row flex-col  align-center  justify-center  items-center">
<h1 className="m-5 text-3xl text-center">
    Here's how you look on the listings page.
</h1>
<button type="button" className="flex-col rounded bg-rose-700 px-12 pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 ">
                           Edit Profile
</button>
</div>
<div className="grid  justify-center  m-4 ">
    <div className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4">
            <div
                className=" flex  flex-col  align-center justify-between  ">
                <div className="flex justify-between  pb-2">
                    <ProfilePic />

                </div>
                <div className="">
                    <h5
                        className=" text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Firstname
                    </h5>
                    <div className="h-px bg-rose-500 w-full mb-2"></div>
                    
                    <p className=" text-lg pb-2 text-base text-neutral-600 dark:text-neutral-200">
                       Rate: 20 per hour
                    </p>
                 
                </div>
            
            </div>
            <div className="flex justify-between align-center text-center items-center ">
               

           
            <button type="button" className=" items-center  flex-col w-44 rounded bg-rose-700  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 ">
                        View Full Profile
                    </button>
                    <button type="button" className="items-center flex-col rounded bg-rose-700 pb-2 pt-2.5 w-24  leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 ">
                        Contact
                    </button>
                    </div>
                    </div>
            </div>

        </div>
    )
};

export default ProfileB;