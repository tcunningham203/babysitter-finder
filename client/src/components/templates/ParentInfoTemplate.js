import { MdPets } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { GiCancel } from "react-icons/gi";

import { MdSmokeFree, MdSmokingRooms } from "react-icons/md";
import { Accordion, Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { getUserType } from "../../utils/helpers";

export default function ParentContactInfo({ parents }) {
  const userType = getUserType();

  const parentArray = Array.isArray(parents) ? parents : [parents];
  const [toastStates, setToastStates] = useState(parentArray.map(() => false));

  const showToastMessage = (index) => {
    setToastStates((prevStates) =>
      prevStates.map((prevState, i) => (i === index ? !prevState : prevState))
    );
  };

  const hideToast = (index) => {
    setToastStates((prevStates) =>
      prevStates.map((prevState, i) => (i === index ? false : prevState))
    );
  };

  useEffect(() => {
    return () => {
      setToastStates(parentArray.map(() => false));
    };
  }, [parents]);
  return (
    <>
       {parentArray.map((parent, index) => (
          <div
            key={parent._id} className="m-4 mx-7 font-cool w-64 z-10">
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   z-10">
              <div className=" flex  flex-col  align-center justify-between  z-10">
              {userType === "Babysitter" && (
                <div className="relative">
              <button
                  type="button"
                  onClick={() => showToastMessage(index)}
                  className="items-center flex-col absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-gray-400 p-2 w-9 leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 "
                >
                  <ImCancelCircle size={18} />
                </button>
                </div>
                )}
                  <h5 className=" text-xl pt-4 pb-2 font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
                    The {parent.user.lastName} Family
                  </h5>
                  <div className="h-px bg-slate-500 w-full mb-2"></div>
                  <p className=" text-lg px-4 p-2 text-base/6">
                    From {parent.zone}
                  </p>
                  <p className=" text-lg px-4 p-2 text-base/6">
                    Number of Kids: {parent.howMany}
                  </p>

                  
                  <p className=" text-lg px-4 p-2 text-base/6">
                    Age&#40;s&#41;: {parent.age}
                  </p>
                
              </div>
              {userType === "Babysitter" && (
                <div className="relative">
                  <div className="absolute bottom-2 right-0">
                    {toastStates[index] && (
                    <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                      <div className="flex text-justify items-center justify-between pb-4 ">
                        <div>
                          Delete this family from your list? This cannot be
                          undone!
                        </div>
                      </div>
                      <div className="h-px bg-slate-500 w-full mb-2"></div>
                      <div className="flex items-center justify-between">
                        <button
                          className="text-gray-400 hover:text-white"
                          onClick={() => hideToast(index)}
                        >
                          Delete
                        </button>

                        <div className="flex items-center text-gray-100 ">
                          <Button
                            onClick={() => hideToast(index)}
                            color="primary"
                            size="small"
                          >
                            Keep
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
)}
              <div className="flex justify-between align-center text-center items-center ">
             
             
                <Accordion
                className="p-0 m-0 flex flex-col items-center align-center relative justify-center w-64"
                collapseAll
              >
                <Accordion.Panel className="">
                  <Accordion.Content className="absolute text-start   bottom-10 p-2 m-0 bg-white border-solid border-4 border-slate-600">
                    <div className="flex flex-col  items-start ">
                      <p className=" text-lg  ">Activities and Games:</p>
                      <p className="   text-neutral-600 text-sm">
                        {parent.activities}
                      </p>
                    </div>
                    <div className="flex flex-col items-start ">
                      <p className=" text-lg  ">Allergies/Medical:</p>
                      <p className="    text-neutral-600 text-sm">
                        {parent.allergies}
                      </p>
                    </div>
                    <div className="flex flex-col  items-start ">
                      <p className=" text-lg  ">Special Requests:</p>
                      <p className="    text-neutral-600 text-sm ">
                        {parent.requests}
                      </p>
                    </div>
                    <div className="flex flex-col items-start ">
                      <p className=" text-lg  ">Contact:</p>
                      <p className="    text-neutral-600 text-sm ">
                        {parent.contact}
                      </p>
                    </div>
                    <div className="h-px bg-slate-500 mb-3 w-full "></div>
                    <div className="grid grid-cols-2">
                 
                    {parent.pets && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdPets size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Has Pets
                        </p>
                      </div>
                    )}
                    {!parent.pets && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <GiCancel size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          No Pets
                        </p>
                      </div>
                    )}
                    {parent.smoker && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdSmokingRooms size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Smokers OK
                        </p>
                      </div>
                    )}
                    {!parent.smoker && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdSmokeFree size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          No Smokers
                        </p>
                      </div>
                    )}
                  </div>
              
                  </Accordion.Content>
                  <Accordion.Title className="p-2 m-0 text-white bg-slate-700 hover:bg-slate-700 active:bg-slate-700">
                    More Details
                  </Accordion.Title>
                </Accordion.Panel>
              </Accordion>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
