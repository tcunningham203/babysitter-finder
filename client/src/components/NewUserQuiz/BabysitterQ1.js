import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BabysitterQ1 = () => {
  const [experience, setExperience] = useState('');
  const [availability, setAvailability] = useState('');
  // Add more state variables for other form inputs

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/signupbsq/2'); // Navigate to the next question page
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    navigate('/signupbsq/0'); // Navigate to the previous question page
  };

  return (
    <div className="bg-green-200 min-h-screen flex-col flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-4">Question 2</h2>
          <label htmlFor="experience" className="block mb-2">
            Experience:
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label htmlFor="availability" className="block mb-2">
            Availability:
            <input
              type="text"
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          {/* Add more form inputs for the current question */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BabysitterQ1;
