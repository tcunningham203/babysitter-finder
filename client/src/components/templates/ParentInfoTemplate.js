import { MdPets } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { MdSmokeFree } from "react-icons/md";
import { Modal, Button } from "flowbite-react";
import React, { useState, useEffect } from "react";

export default function ParentContactInfo({ parents }) {
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
    <>
      {parents &&
        parents.map((parent) => (
          <div key={parent._id} className="m-4 mx-7 font-cool w-64 z-10">
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4 z-10">
              <div className=" flex  flex-col  align-center justify-between  z-10">
                <div className="text-center">
                  <h5 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    The {parent.user.lastName} Family
                  </h5>
                  <div className="h-px bg-slate-500 w-full mb-2"></div>

                  <p className=" text-lg pb-2 text-base/6">
                    Number of Kids: {parent.howMany}
                  </p>
                  <p className=" text-lg pb-2 text-base/6">
                    Age&#40;s&#41;: {parent.age}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute bottom-2 right-0">
                  {showToast && (
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
                          onClick={hideToast}
                        >
                          Delete
                        </button>

                        <div className="flex items-center text-gray-100 ">
                          <Button
                            onClick={hideToast}
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

              <div className="flex justify-between align-center text-center items-center ">
                <button
                  type="button"
                  onClick={() => props.setOpenModal("dismissible")}
                  className=" items-center  flex-col w-32 rounded bg-slate-700  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 "
                >
                  More Details
                </button>
                <button
                  type="button"
                  onClick={showToastMessage}
                  className="items-center flex-col rounded-lg bg-gray-400 p-2 w-9 leading-normal text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 "
                >
                  <ImCancelCircle size={18} />
                </button>

                {/* Model from https://www.flowbite-react.com/docs/components/modal */}

                <Modal
                  className="font-cool h-screen pt-6"
                  dismissible
                  show={props.openModal === "dismissible"}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <div className=" flex  p-2 items-center justify-center align-center  ">
                    <div className="flex flex-col w-5/6 px-2 items-start ">
                      <h5
                        className=" sm:text-4xl xs:text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                        style={{ fontSize: 20 }}
                      >
                        The {parent.user.lastName} Family
                      </h5>
                      <div className="h-px bg-slate-500 w-full "></div>
                      <p className=" sm:text-xl xs:text-sm text-slate-500">
                        {parent.zone}
                      </p>
                    </div>
                  </div>
                  <Modal.Body className="py-0 px-2">
                    <div className="flex flex-col items-start ">
                      <p className=" text-2xl  ">Activities and Games:</p>
                      <p className=" text-lg  text-base/6 text-neutral-600 ">
                        {parent.activities}
                      </p>
                    </div>
                    <div className="flex flex-col  items-start ">
                      <p className=" text-2xl  ">Allergies/Medical:</p>
                      <p className=" text-lg  text-base/6 text-neutral-600 ">
                        {parent.allergies}
                      </p>
                    </div>

                    <div className="flex flex-col  items-start ">
                      <p className=" text-2xl  ">Special Requests:</p>
                      <p className=" text-lg  text-base/6 text-neutral-600 ">
                        {parent.requests}
                      </p>
                    </div>

                    <div className="flex flex-col  items-start ">
                      <p className=" text-2xl  ">Email:</p>
                      <p className=" text-lg  text-base/6 text-neutral-600 ">
                        {parent.user.email}
                      </p>
                    </div>
                    <div className="h-px bg-slate-500 mb-3 w-full "></div>
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col justify-evenly text-center items-center ">
                        <p className="  flex text-base/6 text-neutral-600 ">
                          <MdPets size={56} />
                        </p>
                        <p
                          className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 "
                          style={{ fontSize: 12 }}
                        >
                          Has Pets
                        </p>
                      </div>
                      <div className="flex flex-col justify-evenly text-center items-center ">
                        <p className="  flex text-base/6 text-neutral-600 ">
                          <MdSmokeFree size={56} />
                        </p>
                        <p
                          className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 "
                          style={{ fontSize: 12 }}
                        >
                          No Smokers
                        </p>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer className="p-2 ">
                    <button
                      type="button"
                      onClick={() => props.setOpenModal(undefined)}
                      className=" items-center  flex-col w-16 rounded bg-gray-400  pb-2 pt-2.5   leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-800  focus:outline-none focus:ring-0 active:bg-gray-950 "
                    >
                      Back
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
