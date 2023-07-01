import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BearIcon from '../BearIcon';

const BabysitterQ0 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/signupbsq/1'); // Navigate to the next question page
    }, 1800); // Adjust the delay time as needed for the animation
  };

  return (
    <div className="bg-rose-100 min-h-screen flex-col flex items-center justify-center">
      <div className="rounded px-8 py-6 sm:text-3xl text-xl text-center sm:w-3/4 lg:w-1/2">
        <form onSubmit={handleNext}>
     <h2 className={`flex items-center justify-center  animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '2'}}> <BearIcon/></h2>
          <h2 className={`text-center md:mb-24 my-8 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '2'}}>Thanks for choosing CubCare.</h2>
          <h2 className={`animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '3'}}>Let's create your babysitting profile to advertise your business.</h2>
          <h2 className={`md:mt-24 mt-8 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '4'}}>We'll ask a series of questions to help you build your brand.</h2>
          <h2 className={`md:mb-24  animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}>Don't worry, you can edit everything later.</h2>
          <button
            type="submit"
            className={`my-8 bg-rose-200 hover:bg-rose-300 active:bg-rose-200  text-black font-bold py-3 px-16 rounded-full focus:outline-none focus:shadow-outline animate-fade-in-button ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-blowup-button bg-rose-200 hover:bg-rose-200 active:bg-rose-200' : ''}`}
            style={{'--word-index': '18', '--blowup-index': '3'}}
            disabled={isAnimating} 
          >
           <span className={`button-text ${isAnimating ? 'animate-fade-out-button' : ''}`}
            style={{'--word-index': '18', '--out-index': '0'}}>I'm ready!</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BabysitterQ0;
