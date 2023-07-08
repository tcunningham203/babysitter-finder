
import React from 'react'
import HeaderB from "./HeaderB";
import ParentContactInfo from '../ParentInfoTemplate';
import Skyline from '../Skyline';

export default function ClientsB() {


    return (
        <div className="bg-slate-200 min-h-screen  pt-16 sm:pt-20 md:pt-24 z-10 ">
            <HeaderB />
<Skyline/>
            <div className=' justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
                    <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium ">
                        Interested parents are listed here.
                    </h1>  <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-bold">
                        Reach out by email.
                    </h1>


                </div>
            </div>









            <div className="  sm:grid sm:col-start-2 sm:col-span-4  justify-center z-10 ">

                <div className="  grid grid-cols-12  justify-center z-10 ">

                    <ParentContactInfo /><ParentContactInfo /><ParentContactInfo /><ParentContactInfo /><ParentContactInfo /><ParentContactInfo /><ParentContactInfo /><ParentContactInfo />
                    <ParentContactInfo />
                    <ParentContactInfo />
                    <ParentContactInfo />
                    <ParentContactInfo />
                </div>
            </div>
        </div>

    )
}

