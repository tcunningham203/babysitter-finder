import { MdPets } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { VscMail } from "react-icons/vsc";
import { MdSmokeFree, MdSmokingRooms } from "react-icons/md";
import { LuTimerOff, LuTimer } from "react-icons/lu";
import { Button, Accordion } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { getUserType } from "../../utils/helpers";

export default function ProfileTemplate({ babysitters, zone }) {
  const userType = getUserType();

  const babysitterArray = Array.isArray(babysitters) ? babysitters : [babysitters];
  const [toastStates, setToastStates] = useState(babysitterArray.map(() => false));

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
      setToastStates(babysitterArray.map(() => false));
    };
  }, [babysitters]);

  return (
    <>
      {babysitterArray.map((babysitter, index) => (
          <div
            key={babysitter?._id}
            className=" m-2 md:m-5  font-cool sm:w-80 w-72 z-10"
          >
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4 ">
              <div className=" flex  flex-col  align-center justify-between  "></div>
              <div className="flex  justify-center align-center items-center animate-fade-in-word mx-2 h-52 pb-2">
                <img className="flex " src={babysitter?.profilePic}></img>
              </div>
              <div className="flex flex-row justify-between py-2  mx-2">
                <h5 className=" text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {babysitter?.user?.firstName}{" "}
                  {babysitter?.user?.lastName.charAt(0)}.
                </h5>
                <div className="flex justify-between align-center text-center items-center ">
                  {userType === "Parent" && (
                    <button
                      type="button"
                      onClick={() => showToastMessage(index)}
                      className="items-center flex-col rounded-full bg-slate-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 "
                    >
                      <VscMail size={22} />
                    </button>
                  )}
                  {userType === "Babysitter" && (
                    <button
                      type="button"
                      onClick={() => showToastMessage(index)}
                      className="items-center flex-col rounded-full bg-gray-400 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-500  focus:outline-none focus:ring-0 active:bg-gray-600 "
                    >
                      <VscMail size={22} />
                    </button>
                  )}
                </div>
              </div>
              <div className="h-28">
                <div className=" mx-2 h-px bg-slate-500  mb-2"></div>
                <p className="mx-2 text-lg pb-1 ">
                  Works Near {babysitter?.zone}
                </p>
                <p className="mx-2 text-lg pb-4 ">Rate: {babysitter?.rates}</p>
              </div>
              <Accordion
                className="p-0 m-0 flex flex-col items-center align-center relative justify-center"
                collapseAll
              >
                <Accordion.Panel className="">
                  <Accordion.Content className="absolute bottom-10 p-2 m-0 bg-white border-solid border-4 border-slate-600">
                    <div className="flex flex-col  items-start ">
                      <p className=" text-lg  ">Babysitting Experience:</p>
                      <p className="    text-neutral-600 text-sm">
                        {babysitter?.jobExp}
                      </p>
                    </div>
                    <div className="flex flex-col items-start ">
                      <p className=" text-lg  ">Other Experience:</p>
                      <p className="    text-neutral-600 text-sm">
                        {babysitter?.otherExp}
                      </p>
                    </div>
                    <div className="flex flex-col  items-start ">
                      <p className=" text-lg  ">Transportation:</p>
                      <p className="    text-neutral-600 text-sm ">
                        {babysitter?.transportation}
                      </p>
                    </div>
                    <div className="flex flex-col items-start ">
                      <p className=" text-lg  ">Activities and Games:</p>
                      <p className="    text-neutral-600 text-sm ">
                        {babysitter?.activities}
                      </p>
                    </div>
                    <div className="h-px bg-slate-500 mb-3 w-full "></div>
                    <div className="grid grid-cols-3">
                    {babysitter?.shortNotice && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <LuTimer size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Short Notice OK
                        </p>
                      </div>
                    )}
                    {!babysitter?.shortNotice && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <LuTimerOff size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          No Short Notice
                        </p>
                      </div>
                    )}
                    {babysitter?.pets && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdPets size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Pets OK
                        </p>
                      </div>
                    )}
                    {!babysitter?.pets && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <GiCancel size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          No Pets
                        </p>
                      </div>
                    )}
                    {babysitter?.smoker && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdSmokingRooms size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Smoker
                        </p>
                      </div>
                    )}
                    {!babysitter?.smoker && (
                      <div className="flex flex-col justify-evenly text-center items-center">
                        <p className="flex">
                          <MdSmokeFree size={30} />
                        </p>
                        <p className="xs:text-xs text-lg flex" style={{ fontSize: 10 }}>
                          Non Smoker
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
              {userType === "Parent" && (
                <div className="relative">
                  <div className="absolute bottom-2 right-0">
                    {toastStates[index] && (
                      <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                        <div className="flex text-justify items-center justify-between pb-4 ">
                          <div>
                            Press confirm to send your profile and email. If
                            they're free, they will email you back.
                          </div>
                        </div>
                        <div className="h-px bg-slate-500 w-full mb-2"></div>
                        <div className="flex items-center justify-between">
                          <button
                            className="text-gray-100 hover:text-white"
                            onClick={() => hideToast(index)}
                          >
                            Confirm
                          </button>
                          <div className="flex items-center text-gray-400 ">
                            <Button
                              onClick={() => hideToast(index)}
                              color="primary"
                              size="small"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {userType === "Babysitter" && (
                <div className="relative">
                  <div className="absolute bottom-2 right-0">
                    {toastStates[index] && (
                      <div className="bg-slate-900 text-white px-6 py-2 rounded-lg">
                        <div className="flex text-justify items-center justify-between pb-4 ">
                          <div>
                            You have a babysitter account. Sign up as a parent
                            to contact babysitters.
                          </div>
                        </div>
                        <div className="h-px bg-slate-500 w-full mb-2"></div>
                        <div className="flex items-center justify-between">
                          <button
                            className="text-gray-100 hover:text-white"
                            onClick={() => hideToast(index)}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
}
