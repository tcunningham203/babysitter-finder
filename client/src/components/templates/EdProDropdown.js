import React, { useState } from 'react';
import { getUserType } from "../../utils/helpers";

const EdProDropdown = ({ zone, onChange }) => {
  const userType = getUserType();
  const [selectedZone, setSelectedZone] = useState(zone);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedZone(selectedValue);
    onChange(e); // Call the onChange prop to pass the value to the parent component
  };



  return (
    <div className='flex flex-col items-center z-20 text-center'>
      <h1>Choose from 1 of 12 zones.</h1>
      {userType === "Babysitter" && <h1>Families there see your profile.</h1>}
     
      <div className=' rounded-lg mt-4 text-white bg-slate-700 hover:bg-slate-800 active:bg-slate-950'>
        <select
          name='zone'
          value={selectedZone}
          onChange={handleDropdownChange}
          className='z-10 h-12 bg-slate-700 overflow-auto rounded-lg w-56'
        >
          <option value={' Washington Heights'}>
            Washington Heights
          </option>
          <option value={'Morningside Heights'}>
            Morningside Heights
          </option>
          <option value={'Central Harlem'}>
            Central Harlem
          </option>
          <option value={'East Harlem'}>
            East Harlem
          </option>
          <option value={'Upper West Side'}>
            Upper West Side
          </option>
          <option value={'Upper East Side'}>
            Upper East Side
          </option>
          <option value=' Chelsea'>
            Chelsea
          </option>
          <option value=' Midtown'>
            Midtown
          </option>
          <option value='Midtown East'>
            Midtown East
          </option>
          <option value={'Greenwich Village'}>
            Greenwich Village
          </option>
          <option value={'Lower East Side'}>
            Lower East Side
          </option>
          <option value={'Tribeca'}>
            Tribeca
          </option>
        </select>
      </div>
     
    </div>
  );
};

export default EdProDropdown;
