import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ParentQ5 = () => {


    const [isAnimating, setIsAnimating] = useState(false);
    
    const [allowPets, setAllowPets] = useState('');
    const [enforceScreenTime, setEnforceScreenTime] = useState('');
    const [smoker, setSmoker] = useState('');

    const navigate = useNavigate();

  
    const handleNext = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/signuppq/6'); // Navigate to the next question page
        }, 800); // Adjust the delay time as needed for the animation
    };

    return (
        <div className="bg-blue-200 min-h-screen flex-col flex justify-center items-center ">
            <span className='animate-in-up rounded p-3 sm:text-3xl text-xl text-center w-11/12 sm:w-3/4 lg:w-1/2'>
                <div className={`  ${isAnimating ? 'animate-out-up cursor-default disabled:pointer-events-none  ' : ''}`}
                    style={{ '--word-index': '12', '--swoop-index': '3' }}>
                    <form >


                        <h2 className="py-4" >Some yes/no questions babysitters may ask:</h2>

                        <h2 className="py-4">Do you have any pets?</h2>


                        <div className="flex  justify-center align-center">
<div className="flex justify-evenly py-2">
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      allowPets === true ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setAllowPets(true)}
  >
    Yes
  </button>
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      allowPets === false ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setAllowPets(false)}
  >
    No
  </button>
</div>
</div>
<div className="h-px bg-blue-500 w-full my-4"></div>


<h2 className="py-4">Does your family enforce screen time rules?</h2>
<div className="flex  justify-center align-center">
<div className="flex justify-evenly py-2">
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      enforceScreenTime === true ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setEnforceScreenTime(true)}
  >
    Yes
  </button>
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      enforceScreenTime === false ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setEnforceScreenTime(false)}
  >
    No
  </button>
</div>
</div>
<div className="h-px bg-blue-500 w-full my-4"></div>



<h2 className="py-4">Are you OK with babysitters who smoke?</h2>
<div className="flex  justify-center align-center">
<div className="flex justify-evenly py-2">
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      smoker === true ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setSmoker(true)}
  >
    Yes
  </button>
  <button
    className={`mx-4 text-center bg-purple-100   py-2  w-24 rounded-full  ${
      smoker === false ? ' outline outline-offset-2 outline-blue-500' : ''
    }`}
    type="button"
    onClick={() => setSmoker(false)}
  >
    No
  </button>
</div>
</div>









                        <div className="h-px bg-blue-500 w-full my-4"></div>

                        <div className='flex min-w-full justify-center my-2 md:my-6'>

                         

                            <button className={`mx-4 bg-blue-800 hover:bg-blue-900  text-white font-bold py-3 px-8 md:px-16 rounded-full focus:outline-none focus:shadow-outline  ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-squish-button ' : ''}`}
                                style={{ '--word-index': '12', '--blowup-index': '0' }}
                               onClick={handleNext}>
                                <span className={`button-text ${isAnimating ? 'animate-mapfade-out-words' : ''}`}
                                    style={{ '--word-index': '0', '--out-index': '0' }}>Next</span>
                            </button>


                        </div>

                    </form>
                </div>
            </span></div>
    );
};

export default ParentQ5;
