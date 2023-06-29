import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BabysitterQ1 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // Add more state variables for other form inputs

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/signupbsq/2'); // Navigate to the next question page
  };

  return (
    <div className="bg-rose-200 min-h-screen flex-col flex items-center justify-center">
      <div className=" rounded px-8 py-6">
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-4">Question 3</h2>
          <h2 className="text-2xl font-bold mb-4">Question 4</h2>
          <label htmlFor="name" className="block mb-2">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label htmlFor="age" className="block mb-2">
            Age:
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          {/* Add more form inputs for the current question */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default BabysitterQ1;
