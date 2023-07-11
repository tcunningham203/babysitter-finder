import React, { useState } from "react";
import BearIcon from "../svg/BearIcon";
import { Carousel } from "flowbite-react";
import SignUp from "../templates/Signup";
import LogIn from "../templates/Login";

const LandingPage = () => {
  
  const [showAlert, setShowAlert] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(true);

  const swapForms = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <div
      className={`${
        isAnimating2
          ? "transition-all duration-1000 ease-in-out bg-slate-300"
          : "bg-slate-700"
      } `}
    >
      <div className=" min-h-screen pb-10 z-10 font-cool">
        <div className={`invisible ${isAnimating2 ? "animate-nav-down" : ""}`}>
      
        </div>
        <div
          className={` justify-between z-10 ${
            isAnimating2 ? "animate-fade-out" : ""
          } ${isAnimating ? "animate-fade-out" : ""}`}
        >
          <div className="justify-between z-10 xl:pt-16">
            <div className="flex sm:flex-row flex-col rounded-lg align-center   justify-center  items-center  pt-2 ">
              <h1 className="xl:text-7xl lg:text-6xl font-neat px-1 md:text-4xl text-3xl text-white text-center font-medium ">
                Make finding child care easy with
              </h1>
              <div className="max-w-screen flex flex-row flex-wrap items-center justify-between py-2 px-4 md:px-0 md:py-6">
                <div className="  flex flex-row md:px-4 ">
                  <BearIcon />

                  <div className=" home align-center font-smart items-center text-center justify-center flex ps-2 pb-1 text-6xl   text-blue-200 ">
                    {" "}
                    Cub
                  </div>
                  <div className=" home align-center font-smart items-center text-center justify-center flex pb-1 text-6xl   text-pink-200 ">
                    {" "}
                    Care
                  </div>
                  <div className=" home align-center font-smart items-center text-center justify-center flex pb-1 text-6xl   text-white ">
                    {" "}
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row align-stretch items-stretch justify-center  z-10">
            <div className=" lg:flex w-2/5 mx-4 align-center justify-center bg-white rounded hidden  z-10">
              <div className="p-5 relative">
                <h5 className=" text-4xl pb-2 text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Get help quickly and safely
                </h5>
                <div className="h-px bg-slate-500 w-full mb-2"></div>

                <p className="  text-justify pb-2 text-base/6">
                  As a parent, use Cubcare to find help in your area. We take
                  privacy seriously; only babysitters you choose to contact will
                  have access to your information.
                </p>
                <p className="   text-justify pb-2 text-base/6">
                  As a babysitter, use Cubcare to jump-start your business, or
                  grow your existing one. Build your profile and meet new
                  families who need your help.
                </p>

                <div className="h-64 mb-3">
                  <Carousel slideInterval={10000}>
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    />
                  </Carousel>
                </div>

                <p className=" text-sm absolute bottom-0 left-5 text-justify pb-2 text-base/6">
                  Coverage is currently limited to Manhattan Island.
                </p>
              </div>
            </div>
            {showSignupForm ? (
              <SignUp/>
            ) : (
              <LogIn/>
            )}
          </div>

          <div className=" md:grid xl:grid-cols-4   flex text-center justify-center mt-2 md:mt-8 z-10 ">
            <div className="flex xl:col-start-2 xl:col-span-2  flex-col lg:flex-row justify-evenly lg:w-full w-80  lg:p-2 items-center text-3xl lg:text-5xl font-neat bg-white rounded-lg  z-10">
              {showSignupForm
                ? "Already have an account?"
                : "Don't have an account yet?"}
              <button
                onClick={swapForms}
                type="button"
                className="font-cool flex-col rounded bg-slate-700 xl:m-0 lg:ms-6 px-6 lg:px-12 lg:py-2  m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 text-xl xs:text-sm z-10"
              >
                {showSignupForm ? "Log in" : "Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

