import { MdPets } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { MdSmokeFree } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { Modal, Button, } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import ProfilePic from "./ProfilePic";
import { getUserType } from "../../utils/helpers";

export default function ProfileTemplate({babysitters}) {
    const [showToast, setShowToast] = useState(false);
    const userType = getUserType();


    const showToastMessage = () => {
        setShowToast(true);
    };

    const hideToast = () => {
        setShowToast(false);
    };

    useEffect(() => {
        let timer;
        if (showToast) {
            timer = setTimeout(() => {
                setShowToast(false);
            }, 16000);
        }
        return () => clearTimeout(timer);
    }, [showToast]);


    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <>
        {babysitters && 
            babysitters.map((babysitter) => (
        <div key={babysitter._id} className=" m-2 md:m-5  font-cool sm:w-80 w-72  z-10">
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4">
                <div
                    className=" flex  flex-col  align-center justify-between  ">
                    <div className="flex justify-center align-center items-center   pb-2">
                   <img className="flex " src={babysitter.profilePic}></img> 

                    </div>
                    <div className="">
                        <h5
                            className=" text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {babysitter.user.firstName} {babysitter.user.lastName}

                        </h5>
                        <div className="h-px bg-slate-500 w-full mb-2"></div>

                        <p className=" text-lg pb-2 text-base/6">
                            Zone: {babysitter.zone}
                        </p>


                        <p className=" text-lg pb-2 text-base/6">
                            Rate: {babysitter.rates}
                        </p>

                        <p className=" text-lg pb-2 text-base/6">
                            Babysitting Experience: {babysitter.jobExp}
                        </p>

                        <p className=" text-lg pb-2 text-base/6">
                            Other Experience: {babysitter.otherExp}
                        </p>

                        <p className=" text-lg pb-2 text-base/6">
                            Transportation: {babysitter.transportation}
                        </p>

                        <p className=" text-lg pb-2 text-base/6">
                            Activities and Games: {babysitter.activities}
                        </p>
                    </div>

                </div>


                {userType === "Parent" && (
                <div className="relative">
                    <div className="absolute bottom-2 right-0">
                        {showToast && (
                            <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                                <div className="flex text-justify items-center justify-between pb-4 ">
                                    <div>Press confirm to send your profile and email. If they're free, they will email you back.</div></div>
                                <div className="h-px bg-slate-500 w-full mb-2"></div>
                                <div className="flex items-center justify-between">
                                    <button className="text-gray-100 hover:text-white" onClick={hideToast}>
                                        Confirm
                                    </button>

                                    <div className="flex items-center text-gray-400 ">
                                        <Button onClick={hideToast} color="primary" size="small">
                                            Cancel
                                        </Button>
                                    </div></div>
                            </div>
                        )}
                    </div>

                </div>
                )}
             {userType === "Babysitter" && (
                <div className="relative">
                    <div className="absolute bottom-2 right-0">
                        {showToast && (
                            <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                                <div className="flex text-justify items-center justify-between pb-4 ">
                                    <div>You have a babysitter account. Sign up as a parent to contact babysitters.</div></div>
                                <div className="h-px bg-slate-500 w-full mb-2"></div>
                                <div className="flex items-center justify-between">
                                    <button className="text-gray-100 hover:text-white" onClick={hideToast}>
                                        OK
                                    </button>

                                   </div>
                            </div>
                        )}
                    </div>

                </div>
                        )} 



                <div className="flex justify-between align-center text-center items-center ">



                    <button type="button" onClick={() => props.setOpenModal('dismissible')} className=" items-center  flex-col w-32 rounded bg-slate-700  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 ">
                        View Profile
                    </button>
                    {userType === "Parent" && (
                    <button type="button" onClick={showToastMessage} className="items-center flex-col rounded-full bg-slate-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 ">
                        <VscMail size={22} />
                    </button>
                     )}
                     {userType === "Babysitter" && (
                    <button type="button" onClick={showToastMessage} className="items-center flex-col rounded-full bg-gray-400 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-500  focus:outline-none focus:ring-0 active:bg-gray-600 ">
                        <VscMail size={22} />
                    </button>
                    )}


                    {/* Model from https://www.flowbite-react.com/docs/components/modal */}


                    <Modal className="h-screen pt-6 font-cool" dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                        <div
                            className=" flex  p-2 items-center justify-center align-center  ">
                            <div className="flex justify-between w-1/4 pb-2">
                                <ProfilePic />

                            </div>
                            <div className="flex flex-col w-5/6 px-2 items-start ">
                                <h5
                                    className=" sm:text-4xl xs:text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" style={{ fontSize: 40 }}>
                                    {babysitter.user.firstName}
                                </h5>
                                <div className="h-px bg-slate-500 w-full "></div>
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
                            <div className="h-px bg-slate-500 mb-3 w-full "></div>
                            <div className="grid grid-cols-3">
                                <div className="flex flex-col justify-evenly text-center items-center ">
                                    <p className="  flex text-base/6 text-neutral-600 ">
                                        <TfiTimer size={56} />
                                    </p>
                                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                                        Short Notice OK
                                    </p>
                                </div><div className="flex flex-col justify-evenly text-center items-center ">
                                    <p className="  flex text-base/6 text-neutral-600 " >
                                        <MdPets size={56} />
                                    </p>
                                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                                        Pets OK
                                    </p>
                                </div>
                                <div className="flex flex-col justify-evenly text-center items-center ">
                                    <p className="  flex text-base/6 text-neutral-600 " >
                                        <MdSmokeFree size={56} />
                                    </p>
                                    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
                                        Non Smoker
                                    </p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="p-2 font-cool">
                            <button type="button" onClick={() => props.setOpenModal(undefined)} className="font-cool items-center  flex-col w-16 rounded bg-gray-400  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-800  focus:outline-none focus:ring-0 active:bg-gray-950 ">
                                Back
                            </button>
                        </Modal.Footer>
                    </Modal>





                </div>
            </div>
        </div>
        ))
    }
    </>
    )
};