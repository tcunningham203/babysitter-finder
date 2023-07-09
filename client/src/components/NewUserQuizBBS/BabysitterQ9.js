import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BearIcon from '../BearIcon';
import HeaderB from '../pagesBBS/HeaderB';
const BabysitterQ9 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/homeB'); // Navigate to the next question page
    }, 1800); // Adjust the delay time as needed for the animation
  };

  return (
  <div>
  <div className={`invisible ${isAnimating ? 'animate-nav-down' : '' }`} style={{'--word-index': '9'}}> 
  <HeaderB/>
  </div>
    <div className="bg-slate-300 font-cool min-h-screen flex-col flex items-center justify-center">
        
      <div className="rounded px-8 py-6 sm:text-3xl text-xl text-center sm:w-3/4 lg:w-1/2">
        <form onSubmit={handleNext}>
     <h2 className={`flex items-center justify-center  animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '2'}}> <BearIcon/></h2>
          <h2 className={`text-center md:mb-24 my-8 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '2'}}>You're all set.</h2>
          <h2 className={`animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '3'}}>Let's head to the listings, where you can compare yourself against other babysitters in your area.</h2>
          <h2 className={`md:mt-16 mt-8 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '4'}}>Parents who like your profile can request contact.</h2>
          <h2 className={` animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '4'}}>You can then email them back.</h2>
          <h2 className={`md:my-12  animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '5'}}>Good luck, and have fun!</h2>
          <button
            type="submit"
            className={`my-8 bg-slate-200 hover:bg-slate-300 active:bg-slate-200  text-black font-bold py-3 px-16 rounded-full focus:outline-none focus:shadow-outline animate-fade-in-button ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-squish-button bg-slate-200 hover:bg-slate-200 active:bg-slate-200' : ''}`}
            style={{'--word-index': '10', '--blowup-index': '3'}}
            disabled={isAnimating} 
          >
           <span className={`button-text ${isAnimating ? 'animate-fade-out-button' : ''}`}
            style={{'--word-index': '10', '--out-index': '0'}}>Let's go!</span>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BabysitterQ9;
