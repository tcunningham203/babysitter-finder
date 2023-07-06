import { MdPets } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { MdSmokeFree } from "react-icons/md";
import { Modal, Button } from 'flowbite-react';
import React, { useState, useEffect } from 'react'




export default function ParentContactInfo () {
    
        const [showToast, setShowToast] = useState(false);

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
         
            
    
             
            <div className="m-4 mx-7 font-cool  xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 z-10">
<div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4 z-10">
                        <div
                            className=" flex  flex-col  align-center justify-between  z-10">
    
    
    
    
    
                            <div className="text-center">
                                <h5
                                    className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    The Lastname Family
                                </h5>
                                <div className="h-px bg-slate-500 w-full mb-2"></div>
    
                                <p className=" text-lg pb-2 text-base/6">
                                    Number of Kids: 2 boys
                                </p>
                                <p className=" text-lg pb-2 text-base/6">
                                   Age&#40;s&#41;: 4 and 7 years old
                                </p>
                              
                            </div>
    
                        </div>
                        <div className="relative">
            <div className="absolute bottom-2 right-0">
              {showToast && (
                <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                  <div className="flex text-justify items-center justify-between pb-4 ">
                    <div>Delete this family from your list? This cannot be undone!</div></div>
                    <div className="h-px bg-slate-500 w-full mb-2"></div>
                    <div className="flex items-center justify-between">
                    <button className="text-gray-400 hover:text-white" onClick={hideToast}>
                     Delete
                    </button>
                  
                  <div className="flex items-center text-gray-100 ">
                    <Button onClick={hideToast} color="primary" size="small">
                     Keep
                    </Button>
                  </div></div>
                </div>
              )}
            </div>
          
          </div>
        
    
                        <div className="flex justify-between align-center text-center items-center ">
    
    
    
                            <button type="button"  onClick={() => props.setOpenModal('dismissible')} className=" items-center  flex-col w-32 rounded bg-slate-700  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 ">
                                More Details
                            </button>
                            <button type="button"  onClick={showToastMessage}className="items-center flex-col rounded-lg bg-gray-400 p-2 w-9 leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 ">
                            <ImCancelCircle size={18}/>
                            </button>
    
    
    
                            {/* Model from https://www.flowbite-react.com/docs/components/modal */}
    
    
                            <Modal className="font-cool h-screen pt-6" dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                                <div
                                        className=" flex  p-2 items-center justify-center align-center  ">
                                     
                                        <div className="flex flex-col w-5/6 px-2 items-start ">
                                            <h5
                                                className=" sm:text-4xl xs:text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" style={{ fontSize: 20 }}>
                                                The Lastname Family
                                            </h5>
                                            <div className="h-px bg-slate-500 w-full "></div>
                                            <p className=" sm:text-xl xs:text-sm text-slate-500">
                                                Upper Manhattan
                                            </p>
                                         
    
                                        </div>
                                    </div>
                                <Modal.Body className="py-0 px-2">
                                   
                                  
                                    <div className="flex flex-col items-start ">
    
                                        <p className=" text-2xl  ">
                                            Activities and Games:
                                        </p>
                                        <p className=" text-lg  text-base/6 text-neutral-600 ">
                                         My boys enjoy running around and playing sports. They have been playing too many video games recently so I want to limit their video game time to 1 hour per day. 
                                        </p>
    
                                    </div>
                                    <div className="flex flex-col  items-start ">
    
                                        <p className=" text-2xl  ">
                                            Allergies/Medical:
                                        </p>
                                        <p className=" text-lg  text-base/6 text-neutral-600 ">
                                       My youngest son is very allergic to shellfish. There is a special shot we have for an emergency.
                                        </p>
    
                                    </div>

                                    <div className="flex flex-col  items-start ">
    
    <p className=" text-2xl  ">
        Special Requests:
    </p>
    <p className=" text-lg  text-base/6 text-neutral-600 ">
     We would mostly want you for when my husband and I work late on weekdays. So you being available on short notice is really important. 
    </p>

</div>

<div className="flex flex-col  items-start ">
    
    <p className=" text-2xl  ">
       Email:
    </p>
    <p className=" text-lg  text-base/6 text-neutral-600 ">
    exampleemailfortesting@gmail.com 
    </p>

</div>
                                    <div className="h-px bg-slate-500 mb-3 w-full "></div>
        <div className="grid grid-cols-2">                         
  <div className="flex flex-col justify-evenly text-center items-center ">
    <p className="  flex text-base/6 text-neutral-600 " >
    <MdPets size={56}/>
    </p>
    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
    Has Pets
    </p>
    </div>
     <div className="flex flex-col justify-evenly text-center items-center ">
    <p className="  flex text-base/6 text-neutral-600 " >
    <MdSmokeFree size={56}/>
    </p>
    <p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
    No Smokers
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
    
         
    )
}

