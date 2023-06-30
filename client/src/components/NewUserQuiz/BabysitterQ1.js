import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../pages/Map';

const BabysitterQ1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/signupbsq/2'); // Navigate to the next question page
    }, 1800); // Adjust the delay time as needed for the animation
  };

  return (
    <div className="bg-rose-200 min-h-screen flex-col flex items-center ">
      <div className="rounded p-3 sm:text-3xl text-xl text-center sm:w-3/4 lg:w-1/2">
        <form onSubmit={handleNext}>
          <h2 className={`text-center  my-4 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '2'}}>First, choose where you want to work.</h2>
          
          <h2 className={`pb-3 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '16', '--out-index': '4'}}>Parents from there will see your profile.</h2>
         <div className='flex min-w-full justify-center '>
          <Map/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BabysitterQ1;
