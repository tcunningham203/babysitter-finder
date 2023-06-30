import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
    <div className={`  bg-slate-200 min-h-screen flex-col flex items-center justify-center ${isAnimating2 ? 'animate-bg-pnt' : ''
} ${isAnimating ? 'animate-bg-bbs' : ''
}`}>
      <div
        className={`  ${
          isAnimating ? 'animate-slide-up' : ''
        } ${
            isAnimating2 ? 'animate-slide-up' : ''
          }`}
      >
       
        <form onSubmit={handleSubmit}>
        <div className='bg-white shadow-md rounded px-8 py-6 relative'>
        {showAlert && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 text-center py-7 absolute top-9 left-0 w-full text-sm -mt-4 mb-4 z-10">
            <p>Please fill in all fields correctly, and select a user type.</p>
          </div>
        )}
          <div className="mb-4">
            <div className="block text-gray-700 text-center text-3xl font-bold mb-2" htmlFor="lastName">
              Sign up with CubCare
            </div>
            <div className="block text-gray-700 text-center text-xl font-bold mb-2" htmlFor="lastName">
            Make finding child care easy.
            </div>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <p className="block text-gray-700 text-lg text-center font-bold mb-2">How will you use CubCare?</p>
            <div className="flex justify-evenly">
              <button
                className={`bg-blue-200 hover:bg-green-500 w-32 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 ${
                  userType === 'babysitter' ? 'bg-green-600' : ''
                }`}
                type="button"
                onClick={() => handleUserType('babysitter')}
              >
                Babysitter
              </button>
              <button
                className={`bg-blue-200 hover:bg-green-500 w-32  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  userType === 'parent' ? 'bg-green-600' : ''
                }`}
                type="button"
                onClick={() => handleUserType('parent')}
              >
                Parent
              </button>
            </div>
          </div></div>
          <div className="flex justify-center pt-7">
            <button
              className={`bg-cyan-700 hover:bg-blue-700 w-64 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isAnimating || (!firstName || !lastName || !email || !password || !confirmPassword || !userType)
                  ? 'opacity-50 hover:bg-cyan-700 cursor-default'
                  : ''
              }`}
              type="submit"
        
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
