import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import BearIconSmall from "./BearIconSmall"
import HeaderB from './pagesBBS/HeaderB';



const LandingPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);
    const navigate = useNavigate();
    const [showSignupForm, setShowSignupForm] = useState(true);

    const swapForms = () => {
        setShowSignupForm(!showSignupForm);
    };


    const handleLogin = (e) => {
        e.preventDefault();





        // THIS IF STATEMENT AND THE ELSE STATEMENT HAVE BEEN COMMENTED OUT FOR TESTING. MUST UNCOMMENT FOR SIGNUP FORM.




        // if (
        //   firstName !== '' &&
        //   lastName !== '' &&
        //   email !== '' &&
        //   password !== '' &&
        //   confirmPassword !== '' &&
        //   userType !== ''
        // ) {



        setIsAnimating2(true);
        setTimeout(() => {
            navigate('/homeB');
        }, 1000);// Navigate to /home


        // } else {
        //   setShowAlert(true);
        // }
    };


    const handleSubmit = (e) => {
        e.preventDefault();





        // THIS IF STATEMENT AND THE ELSE STATEMENT HAVE BEEN COMMENTED OUT FOR TESTING. MUST UNCOMMENT FOR SIGNUP FORM.




        // if (
        //   firstName !== '' &&
        //   lastName !== '' &&
        //   email !== '' &&
        //   password !== '' &&
        //   confirmPassword !== '' &&
        //   userType !== ''
        // ) {


        if (userType === 'babysitter') {
            setIsAnimating(true);
            setTimeout(() => {
                navigate('/signupbsq/0');
            }, 400);// Navigate to /signupbsq for babysitters
        } else if (userType === 'parent') {
            setIsAnimating(true);
            setTimeout(() => {
                navigate('/signuppq/0');
            }, 400);// Navigate to /signuppq for parents
        }

        // } else {
        //   setShowAlert(true);
        // }
    };

    const handleUserType = (type) => {
        setUserType(type);
        setShowAlert(false);
    };





    return (
        <div
  className={`${
    isAnimating2
      ? 'transition-all duration-1000 ease-in-out bg-slate-300'
      : 'bg-slate-700'
  } `}
>
        <div className=" min-h-screen pb-10 z-10 font-cool"> 
            <div className={`invisible ${isAnimating2 ? 'animate-nav-down' : '' }`}> 
            <HeaderB/>
            </div>
            <div className={` justify-between z-10 ${isAnimating2 ? 'animate-fade-out' : ''
                } ${isAnimating ? 'animate-fade-out' : ''
                }`}>
                     

                <div className="justify-between z-10 xl:pt-16">
                    <div
                        className="flex sm:flex-row flex-col rounded-lg align-center   justify-center  items-center  pt-2 ">
                        <h1 className="xl:text-7xl lg:text-6xl font-neat px-1 md:text-4xl text-3xl text-white text-center font-medium ">
                            Make finding child care easy with
                        </h1>
                        <div className="max-w-screen flex flex-row flex-wrap items-center justify-between py-2 px-4 md:px-0 md:py-6">
                            <div className="  flex flex-row md:px-4 ">
                                <BearIconSmall />

                                <div className=" home align-center font-smart items-center text-center justify-center flex ps-2 pb-1 text-6xl   text-blue-200 "> Cub</div>
                                <div className=" home align-center font-smart items-center text-center justify-center flex pb-1 text-6xl   text-pink-200 "> Care</div>
                                <div className=" home align-center font-smart items-center text-center justify-center flex pb-1 text-6xl   text-white "> .</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row align-stretch items-stretch justify-center  z-10" >



                    <div
                        className=" lg:flex w-2/5 mx-4 align-center justify-center bg-white rounded hidden  z-10">






                        <div className="p-5 relative">
                            <h5
                                className=" text-4xl pb-2 text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Get help quickly and safely
                            </h5>
                            <div className="h-px bg-slate-500 w-full mb-2"></div>

                            <p className="  text-justify pb-2 text-base/6">
                                As a parent, use Cubcare to find help in your area. We take privacy seriously; only babysitters you choose to contact will have access to your information.
                            </p>
                            <p className="   text-justify pb-2 text-base/6">
                                As a babysitter, use Cubcare to jump-start your business, or grow your existing one. Build your profile and meet new families who need your help.
                            </p>






                            <div className='h-64 mb-3'>
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
                        <div className="mx-4 flex align-stretch items-stretch" >

                            <div className="   flex  justify-center ">
                                <div className="flex justify-between align-stretch items-stretch" >

                                    <form className=" flex justify-between align-stretch items-stretch" onSubmit={handleSubmit}>
                                        <div className='bg-white w-80 shadow-md rounded lg:pt-0 pt-5 px-5 py-1 relative flex flex-col justify-evenly align-stretch items-stretch'>
                                            {showAlert && (
                                                <div className="bg-slate-100 border-l-4 border-slate-500 text-slate-700 text-center py-7 absolute top-9 left-0 w-full text-sm -mt-4 mb-4 z-10">
                                                    <p>Please fill in all fields correctly, and select a user type.</p>
                                                </div>
                                            )}
                                            <div className="mb-4">
                                                <div className="hidden lg:block text-gray-700 text-center text-2xl font-bold mt-2 mb-4" htmlFor="lastName">
                                                    Sign up with CubCare
                                                </div>

                                                <input
                                                    className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text"
                                                    placeholder="First Name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    autoComplete="off"

                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="h-px bg-slate-500 w-full mb-1 sm:mb-4"></div>
                                            <div className="mb-4">
                                                <p className="block text-gray-700 text-lg text-center font-bold mb-2">How will you use CubCare?</p>
                                                <div className="flex justify-evenly">
                                                    <button
                                                        className={`bg-blue-200 hover:bg-green-500 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${userType === 'babysitter' ? 'bg-green-600' : ''
                                                            }`}
                                                        type="button"
                                                        onClick={() => handleUserType('babysitter')}
                                                    >
                                                        Babysitter
                                                    </button>
                                                    <button
                                                        className={`bg-blue-200 hover:bg-green-500 w-32  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${userType === 'parent' ? 'bg-green-600' : ''
                                                            }`}
                                                        type="button"
                                                        onClick={() => handleUserType('parent')}
                                                    >
                                                        Parent
                                                    </button>
                                                </div>
                                                <div className="flex justify-center lg:mt-0 md:mt-8 pt-4">
                                                    <button
                                                        className={`ease-in duration-150 bg-red-100 hover:bg-red-300 w-44  text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${isAnimating || (!firstName || !lastName || !email || !password || !confirmPassword || !userType)
                                                            ? ' opacity-20 hover:none  cursor-default'
                                                            : ''
                                                            }`}
                                                        type="submit"

                                                    >
                                                        Get Started
                                                    </button>
                                                </div>
                                            </div></div>

                                    </form>
                                </div>
                            </div>

                        </div>

                    ) : (
                        <div className="mx-4 flex  items-stretch" >

                            <div className="   flex  justify-center  ">
                                <div className="flex justify-center " >

                                    <form className=" flex justify-center " onSubmit={handleLogin}>
                                        <div className='bg-white w-80 shadow-md rounded lg:pt-0 pt-5 px-5 py-1 relative flex flex-col justify-between '>
                                            {showAlert && (
                                                <div className="bg-slate-100 border-l-4 border-slate-500 text-slate-700 text-center py-7 absolute top-9 left-0 w-full text-sm -mt-4 mb-4 z-10">
                                                    <p>Please fill in all fields correctly, and select a user type.</p>
                                                </div>
                                            )}
                                            <div className="mb-4">
                                                <div className="hidden lg:block text-gray-700 text-center text-2xl font-bold mt-2 mb-24" htmlFor="lastName">
                                                    Log in to CubCare
                                                </div>



                                            </div>

                                            <div className="mb-4">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    autoComplete="off"

                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="h-px bg-slate-500 w-full lg:mt-16 mb-1 sm:mb-4"></div>
                                            <div className="mb-4">

                                                <div className="flex justify-center pb-6 lg:mt-0 md:mt-8 pt-4">
                                                    <button
                                                        className={`ease-in duration-150 bg-red-100 hover:bg-red-300 w-44  text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${isAnimating || (!email || !password || !confirmPassword)
                                                            ? ' opacity-20 hover:none  cursor-default'
                                                            : ''
                                                            }`}
                                                        type="submit"

                                                    >
                                                        Continue
                                                    </button>
                                                </div>
                                            </div></div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    )}









                </div>


                <div className=" md:grid xl:grid-cols-4   flex text-center justify-center mt-2 md:mt-8 z-10 ">


                    <div className="flex xl:col-start-2 xl:col-span-2  flex-col lg:flex-row justify-evenly lg:w-full w-80  lg:p-2 items-center text-3xl lg:text-5xl font-neat bg-white rounded-lg  z-10">
                        {showSignupForm ? "Already have an account?" : "Don't have an account yet?"}
                        <button onClick={swapForms} type="button" className="font-cool flex-col rounded bg-slate-700 xl:m-0 lg:ms-6 px-6 lg:px-12 lg:py-2  m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 text-xl xs:text-sm z-10">
                            {showSignupForm ? "Log in" : "Sign up"}
                        </button>
                    </div>
                </div>

            </div>

        </div></div>
    )
};

export default LandingPage;