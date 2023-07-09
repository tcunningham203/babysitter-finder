import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const BabysitterQ2 = () => {

  
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();





  const handleNext = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/signupbsq/3'); // Navigate to the next question page
    }, 1000); // Adjust the delay time as needed for the animation
  };

  return (
    <div className="bg-slate-200 min-h-screen flex-col flex items-center justify-center">
      <div className="rounded p-3 sm:text-3xl text-xl text-center sm:w-3/4 lg:w-1/2">
        <form onSubmit={handleNext}>
          <h2 className={`text-center  my-4 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '0'}}>Great! OK, let's create your brand.</h2>
          <h2 className={`text-center  my-4 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '0'}}>&#40;You can skip steps if you want and finish later.&#41;</h2>
          
       
         <div className='flex min-w-full justify-center '>
     
       

    {/* Render confirm button */}
    
      <button  className={` bg-slate-800 hover:bg-slate-900  text-white font-bold py-3 px-16 rounded-full focus:outline-none focus:shadow-outline animate-fade-in-button ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-squish-button ' : ''}`}
      style={{'--word-index': '5', '--blowup-index': '0'}}
      disabled={isAnimating}  onClick={handleNext}>
       <span className={`button-text ${isAnimating ? 'animate-mapfade-out-words' : ''}`}
          style={{'--word-index': '0', '--out-index': '0'}}>Next</span>
      </button>
   

          </div>
        
        </form>
      </div>
    </div>
  );
};

export default BabysitterQ2;
