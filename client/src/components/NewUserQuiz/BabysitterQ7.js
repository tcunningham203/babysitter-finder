import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const BabysitterQ7 = () => {


    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);

    const navigate = useNavigate();

    const handlePrev = (e) => {
        e.preventDefault();
        setIsAnimating2(true);
        setTimeout(() => {
            navigate('/signupbsq/6'); // Navigate to the previous question page
        }, 800); // Adjust the delay time as needed for the animation
    };

    const handleNext = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/signupbsq/8'); // Navigate to the next question page
        }, 800); // Adjust the delay time as needed for the animation
    };

    return (
        <div className="bg-rose-200 min-h-screen flex-col flex justify-center items-center ">
            <span className='animate-in-up rounded p-3 sm:text-3xl text-xl text-center w-11/12 sm:w-3/4 lg:w-1/2'>
                <div className={`  ${isAnimating2 ? 'animate-out-down cursor-default disabled:pointer-events-none ' : ''}${isAnimating ? 'animate-out-up cursor-default disabled:pointer-events-none  ' : ''}`}
                    style={{ '--word-index': '12', '--swoop-index': '3' }}>
                    <form >


                        <h2 className="" >Write about any job experience you have specific to babysitting.</h2>

                        <h2 className="py-10">Number of kids and their ages are good details to add here.</h2>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Babysitting Experience:"
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none md:w-4/5 w-full md:h-44 h-64 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                        <div className='flex min-w-full justify-center my-2 md:my-6'>

                            <button className={` mx-4 bg-rose-800 hover:bg-rose-900  text-white font-bold py-3 px-8 md:px-16 rounded-full focus:outline-none focus:shadow-outline  ${isAnimating2 ? 'cursor-default disabled:pointer-events-none animate-squish-button ' : ''}`}
                                style={{ '--word-index': '12', '--blowup-index': '0' }}
                                disabled={isAnimating} onClick={handlePrev}>
                                <span className={`button-text ${isAnimating2 ? 'animate-mapfade-out-words' : ''}`}
                                    style={{ '--word-index': '0', '--out-index': '0' }}>Back</span>
                            </button>

                            <button className={`mx-4 bg-rose-800 hover:bg-rose-900  text-white font-bold py-3 px-8 md:px-16 rounded-full focus:outline-none focus:shadow-outline  ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-squish-button ' : ''}`}
                                style={{ '--word-index': '12', '--blowup-index': '0' }}
                                disabled={isAnimating2} onClick={handleNext}>
                                <span className={`button-text ${isAnimating ? 'animate-mapfade-out-words' : ''}`}
                                    style={{ '--word-index': '0', '--out-index': '0' }}>Next</span>
                            </button>


                        </div>

                    </form>
                </div>
            </span></div>
    );
};

export default BabysitterQ7;
