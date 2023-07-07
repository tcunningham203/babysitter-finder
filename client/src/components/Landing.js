import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import BearIconSmall from "./BearIconSmall"
import { NavLink } from "react-router-dom"


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
            }, 1300);// Navigate to /signupbsq for babysitters
        } else if (userType === 'parent') {
            setIsAnimating2(true);
            setTimeout(() => {
                navigate('/signuppq/0');
            }, 1300);// Navigate to /signuppq for parents
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
        <div className="bg-slate-700 min-h-screen z-10 font-cool">

            <div className='justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center   justify-center  items-center md:py-5 py-2 ">
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

            <div className="mb-2 sm:m-4  flex flex-row  justify-center  z-10 ">



                <div
                    className=" flex w-2/5 mx-4 align-center justify-center bg-white rounded z-10">





                    <div className="flex justify-center h-64  pb-2">


                    </div>
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






                        <div className='h-64'>
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


                        <p className=" text-sm absolute bottom-3 left-5 text-justify pb-2 text-base/6">
                            Coverage is currently limited to Manhattan Island. More cities are on the way!
                        </p>
                    </div>

                </div>



                <div className="flex justify-between align-center text-center items-center ">











                </div>
                <div className="mx-4">

                    <div className={`   flex items-center justify-center ${isAnimating2 ? 'animate-bg-pnt' : ''
                        } ${isAnimating ? 'animate-bg-bbs' : ''
                        }`}>
                        <div
                            className={`  ${isAnimating ? 'animate-slide-up' : ''
                                } ${isAnimating2 ? 'animate-slide-up' : ''
                                }`}
                        >

                            <form onSubmit={handleSubmit}>
                                <div className='bg-white shadow-md rounded px-5 py-1 relative'>
                                    {showAlert && (
                                        <div className="bg-slate-100 border-l-4 border-slate-500 text-slate-700 text-center py-7 absolute top-9 left-0 w-full text-sm -mt-4 mb-4 z-10">
                                            <p>Please fill in all fields correctly, and select a user type.</p>
                                        </div>
                                    )}
                                    <div className="mb-4">
                                        <div className="block text-gray-700 text-center text-3xl font-bold mt-2 mb-4" htmlFor="lastName">
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
                                    <div className="h-px bg-slate-500 w-full mb-2"></div>
                                    <div className="mb-4">
                                        <p className="block text-gray-700 text-lg text-center font-bold mb-2">How will you use CubCare?</p>
                                        <div className="flex justify-evenly">
                                            <button
                                                className={`bg-blue-200 hover:bg-green-500 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 ${userType === 'babysitter' ? 'bg-green-600' : ''
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
                                        <div className="flex justify-center pt-4">
                                            <button
                                                className={`bg-cyan-700 hover:bg-blue-700 w-44 text-white text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${isAnimating || (!firstName || !lastName || !email || !password || !confirmPassword || !userType)
                                                    ? 'opacity-50 hover:bg-cyan-700 cursor-default'
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
            </div>

            <div className=" grid grid-cols-4 flex text-center justify-center my-8 z-10 ">


                <div className="flex col-start-2 col-span-2 flex-row justify-evenly p-2 items-center text-5xl font-neat bg-white rounded-lg  z-10">
                    Already have an account?
                    <NavLink to='/login' type="button" className="font-cool flex-col rounded bg-slate-700 px-2 sm:px-12 pb-2 pt-2.5  m-1 leading-normal font-medium text-white transition duration-150 ease-in-out hover:bg-slate-800  focus:outline-none focus:ring-0 active:bg-slate-950 text-xl xs:text-sm z-10">
                        Log in
                    </NavLink>
                </div>
            </div>

        </div>


    )
};

export default LandingPage;