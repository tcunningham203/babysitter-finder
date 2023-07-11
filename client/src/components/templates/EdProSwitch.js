import React from 'react';
import { GiCancel } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { MdSmokeFree, MdSmokingRooms } from "react-icons/md";
import { LuTimerOff, LuTimer } from "react-icons/lu";
import { getUserType } from "../../utils/helpers";

const EdProSwitch = () => {
    const userType = getUserType();
    return (
        <>
            {userType === "Parent" && (
                <div className='pb-12'> </div>
            )}
            <div className="grid grid-cols-3 ">

                {userType === "Babysitter" && (

                    <div className="flex flex-col justify-evenly text-center items-center ">
                        <p className="  flex text-base/6 text-neutral-600 ">
                            <LuTimer size={33} />
                        </p>
                        <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                            Short Notice OK
                        </p>
                    </div>

                )}
                {userType === "Babysitter" && (
                    <div className="flex items-center justify-center w-full mb-4">

                        <label for="toggleA" className="flex items-center cursor-pointer">

                            <div class="relative">

                                <input type="checkbox" id="toggleA" className="sr-only" />

                                <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>

                                <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
                            </div>
                        </label>
                    </div>
                )}
                {userType === "Babysitter" && (
                    <div className="flex flex-col justify-evenly text-center items-center ">
                        <p className="  flex text-base/6 text-neutral-600 ">
                            <LuTimerOff size={33} />
                        </p>
                        <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                            No Short Notice
                        </p>
                    </div>
                )}

                <div className="flex flex-col justify-evenly text-center items-center ">
                    <p className="  flex text-base/6 text-neutral-600 " >
                        <MdPets size={33} />
                    </p>
                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                        Pets OK
                    </p>
                </div>

                <div className="flex items-center justify-center w-full mb-4">

                    <label for="toggleB" className="flex items-center cursor-pointer">

                        <div class="relative">

                            <input type="checkbox" id="toggleB" className="sr-only" />

                            <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>

                            <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
                        </div>
                    </label>
                </div>

                <div className="flex flex-col justify-evenly text-center items-center ">
                    <p className="  flex text-base/6 text-neutral-600 " >
                        <GiCancel size={33} />
                    </p>
                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                        No Pets
                    </p>
                </div>



                <div className="flex flex-col justify-evenly text-center items-center ">
                    <p className="  flex text-base/6 text-neutral-600 " >
                        <MdSmokingRooms size={33} />
                    </p>
                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                        Smoker
                    </p>
                </div>

                <div className="flex items-center justify-center w-full mb-4">

                    <label for="toggleC" className="flex items-center cursor-pointer">

                        <div class="relative">

                            <input type="checkbox" id="toggleC" className="sr-only" />

                            <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>

                            <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
                        </div>
                    </label>
                </div>

                <div className="flex flex-col justify-evenly text-center items-center ">
                    <p className="  flex text-base/6 text-neutral-600 " >
                        <MdSmokeFree size={33} />
                    </p>
                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                        Non Smoker
                    </p>
                </div>


            </div>
        </>
    );
};

export default EdProSwitch;
