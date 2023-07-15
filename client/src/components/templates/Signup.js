import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { SIGNUP } from "../../utils/mutations";

const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showToast, setShowToast] = useState(false);
//   const [isAnimating2, setIsAnimating2] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(true);
  const [signup] = useMutation(SIGNUP);

  const showToastMessage = () => {
    setShowToast(true);
};

const hideToast = () => {
  setShowToast(false);
};

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    

    if (formState.password !== formState.confirmPassword) {
      setShowAlert(true);
      showToastMessage();
      return;
    }
    try{
    const mutationResponse = await signup({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        userType: formState.userType,
      },
    });
     if (mutationResponse.data.signup === null) {
      showToastMessage();
      return;
    }
    const token = mutationResponse.data.signup.token;
    Auth.login(token);
  }catch (error) {
    showToastMessage();
    console.log(error);
  }


  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        hideToast();
      }, 16000)
    }
    return () => clearTimeout(timer);
  }, [showToast]);



  return (
    <div className="mx-4 flex align-stretch items-stretch">
      <div className="   flex  justify-center ">
        <div className="flex justify-between align-stretch items-stretch">
          <form
            className=" flex justify-between align-stretch items-stretch"
            onSubmit={handleFormSubmit}
          >
            <div className="bg-white w-80 shadow-md rounded lg:pt-0 pt-5 px-5 py-1 relative flex flex-col justify-evenly align-stretch items-stretch">
              {showAlert && (
                <div className="bg-rose-100 border-l-4 border-slate-500 text-slate-700 text-center py-4 absolute top-0 left-0 w-full text-sm z-10">
                  <p>
                    Please fill in all fields correctly.
                  </p>
                </div>
              )}
              <div className="mb-4">
                <div
                  className="hidden lg:block text-gray-700 text-center text-2xl font-bold mt-2 mb-4"
                  htmlFor="lastName"
                >
                  Sign up with CubCare
                </div>
               {showToast && (
                     <div className="bg-rose-100 text-center py-2 absolute top-0 left-0 w-full">
                     <p>Email Already Exists !!</p>
               </div>
                   )}
                <input
                  className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={handleChange}
                  className="appearance-none border border-slate-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border-slate-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </div>
              <div className="h-px bg-slate-500 w-full mb-1 sm:mb-4"></div>
              <div className="mb-4">
                <p className="block text-gray-700 text-lg text-center font-bold mb-2">
                  How will you use CubCare?
                </p>
                <div className="flex justify-evenly">
                  <button
                    className={`bg-blue-200 hover:bg-green-500 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${
                      formState.userType === "Babysitter"
                        ? "bg-green-600"
                        : ""
                    }`}
                    type="button"
                    name="userType"
                    value="Babysitter"
                    onClick={handleChange}
                  >
                    Babysitter
                  </button>
                  <button
                    className={`bg-blue-200 hover:bg-green-500 w-32  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                      formState.userType === "Parent"
                        ? "bg-green-600"
                        : ""
                    }`}
                    type="button"
                    name="userType"
                    value="Parent"
                    onClick={handleChange}
                  >
                    Parent
                  </button>
                </div>
                <div className="flex justify-center lg:mt-0 md:mt-8 pt-4">
                  <button
                    className={`ease-in duration-150 bg-red-100 hover:bg-red-300 w-44  text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${
                      isAnimating || !formState
                        ? " opacity-20 hover:none  cursor-default"
                        : ""
                    }`}
                    type="submit"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;