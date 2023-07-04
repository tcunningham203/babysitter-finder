import { MdPets } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { MdSmokeFree } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { Modal } from 'flowbite-react';
import React, { useState } from 'react'
import HeaderB from "./HeaderB";
import ProfilePic from "../ProfilePic";
import "@firebase/storage";

export default function ProfileB() {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <div className="bg-rose-200 h-screen ">
            <HeaderB />
            <div className='grid 2xl:grid-cols-12 xl:grid-cols-12  lg:grid-cols-12 md:grid-cols-11 sm:grid-cols-11 grid-cols-12 justify-between'>
                <div
                    className="2xl:col-start-4 2xl:col-span-6 xl:col-start-4 xl:col-span-6 lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-9 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 flex flex-row  rounded-lg align-center bg-white md:my-5 my-2 justify-evenly  items-center">
                    <h1 className="md:my-5 my-2 md:text-3xl text-lg text-center">
                        Here's what people see.
                    </h1>
                    <button type="button" className="flex-col rounded bg-rose-700 px-2 sm:px-12 pb-2 pt-2.5  m-2 leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 xs:text-sm">
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-12 xl:grid-cols-11  lg:grid-cols-12 md:grid-cols-11 sm:grid-cols-11 grid-cols-12 justify-center  ">
                <div className="2xl:col-start-6 2xl:col-span-2 xl:col-start-5 xl:col-span-3 lg:col-start-5 lg:col-span-4 md:col-start-4 md:col-span-5 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4">
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

                            <p className=" text-lg pb-2 text-base/6">
                                Rate: 20 per hour for 1 child, +1 dollar for each additional child
                            </p>

                        </div>

                    </div>
                    <div className="flex justify-between align-center text-center items-center ">



                        <button type="button"  onClick={() => props.setOpenModal('dismissible')} className=" items-center  flex-col w-32 rounded bg-rose-700  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 ">
                            View Profile
                        </button>
                        <button type="button" className="items-center flex-col rounded-full bg-rose-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 ">
                        <VscMail size={22}/>
                        </button>



                        {/* Model from https://www.flowbite-react.com/docs/components/modal */}


                        <Modal className="h-screen pt-6" dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                            <div
                                    className=" flex  p-2 items-center justify-center align-center  ">
                                    <div className="flex justify-between w-1/4 pb-2">
                                        <ProfilePic />

                                    </div>
                                    <div className="flex flex-col w-5/6 px-2 items-start ">
                                        <h5
                                            className=" sm:text-4xl xs:text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" style={{ fontSize: 40 }}>
                                            Firstname
                                        </h5>
                                        <div className="h-px bg-rose-500 w-full "></div>
                                        <p className=" sm:text-xl xs:text-sm text-slate-500">
                                            Upper Manhattan
                                        </p>
                                     

                                    </div>
                                </div>
                            <Modal.Body className="py-0 px-2">
                               
                                <div className="flex flex-col  items-start ">

                                    <p className=" text-2xl  ">
                                        Babysitting Experience:
                                    </p>
                                    <p className=" text-lg  text-base/6 text-neutral-600 ">
                                        I have 5 years experience in babysitting, and have experience babysitting children ages 1 to 5. So far, I have helped over 20 different families with their child care needs.
                                    </p>

                                </div>
                                <div className="flex flex-col items-start ">

                                    <p className=" text-2xl  ">Other Experience:
                                    </p>
                                    <p className=" text-lg  text-base/6 text-neutral-600 ">
                                        Before doing babysitting full time, I was an assistant teacher at an elementary school in New Jersey. I also worked at a summer camp last year, which had kids from 8-12 years old.
                                    </p>

                                </div>
                                <div className="flex flex-col  items-start ">

                                    <p className=" text-2xl  ">
                                        Transportation:
                                    </p>
                                    <p className=" text-lg  text-base/6 text-neutral-600 ">
                                        I mainly use the buses and subway to travel around the city. Although I don't have a car, I do have a drivers license for emergency situations.
                                    </p>

                                </div>
                                <div className="flex flex-col items-start ">

                                    <p className=" text-2xl  ">
                                        Activities and Games:
                                    </p>
                                    <p className=" text-lg  text-base/6 text-neutral-600 ">
                                        I love playing board games and going outside with kids. I also like to sneak in educational content like science experiments and stove-free cooking lessons.
                                    </p>

                                </div>
                                <div className="flex flex-col  items-start ">

                                    <p className=" text-2xl  ">
                                        Handling Behavior:
                                    </p>
                                    <p className=" text-lg  text-base/6 text-neutral-600 ">
                                        I like to use a reward based system with the kids. I will establish rewards like stickers or more time to play, etc. If they meet my expectations for good behavior, they are rewarded.
                                    </p>

                                </div>
                                <div className="h-px bg-rose-500 mb-3 w-full "></div>
    <div className="grid grid-cols-3">                         
<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 ">
<TfiTimer size={56}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Short Notice OK
</p>
</div><div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<MdPets size={56}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Pets OK
</p>
</div>
 <div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<MdSmokeFree size={56}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Non Smoker
</p>
</div>
</div>
                            </Modal.Body>
                            <Modal.Footer className="p-2 ">
                            <button type="button"  onClick={() => props.setOpenModal(undefined)} className=" items-center  flex-col w-16 rounded bg-gray-400  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-800  focus:outline-none focus:ring-0 active:bg-gray-950 ">
                            Back
                        </button>
                            </Modal.Footer>
                        </Modal>

                    



                    </div>
                </div>
            </div>

        </div>
    )
};

