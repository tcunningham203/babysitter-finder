import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";


const LogIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [login] = useMutation(LOGIN);

  const showToastMessage = () => {
    setShowToast(true);
  };

  const hideToast = () => {
    setShowToast(false);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });

    if (mutationResponse.data.login === null) {
      showToastMessage();
      return;
    }

    const token = mutationResponse.data.login.token;
    Auth.login(token);
  } catch (error) {
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
    <div className="mx-4 flex  items-stretch">
      <div className="   flex  justify-center  ">
        <div className="flex justify-center ">
          <form
            className=" flex justify-center "
            onSubmit={handleFormSubmit}
          >
            <div className="bg-white w-80 shadow-md rounded lg:pt-0 pt-5 px-5 py-1 relative flex flex-col justify-between ">
              {showAlert && (
                <div className="bg-slate-100 border-l-4 border-slate-500 text-slate-700 text-center py-7 absolute top-9 left-0 w-full text-sm -mt-4 mb-4 z-10">
                  <p>
                    Please fill in all fields correctly, and select a user type.
                  </p>
                </div>
              )}
              <div className="mb-4">
                <div
                  className="hidden lg:block text-gray-700 text-center text-2xl font-bold mt-2 mb-24"
                  htmlFor="lastName"
                >
                  Log in to CubCare
                </div>
                {showToast && (
      <div className="bg-rose-100 text-center py-2 absolute top-0 left-0 w-full">
      <p>Invalid credentials. Please try again</p>
</div>
    )}
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
                            <div className="h-px bg-slate-500 w-full lg:mt-16 mb-1 sm:mb-4"></div>
              <div className="mb-4">
                <div className="flex justify-center pb-6 lg:mt-0 md:mt-8 pt-4">
                  <button
                    className={`ease-in duration-150 bg-red-100 hover:bg-red-300 w-44  text-2xl font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${
                      isAnimating || !formState
                        ? " opacity-20 hover:none  cursor-default"
                        : ""
                    }`}
                    type="submit"
                  >
                    Continue
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

export default LogIn;