import React from 'react';
import { Dropdown } from 'flowbite-react';
import { getUserType } from "../../utils/helpers";
const EdProDropdown = () => {
    const userType = getUserType();
  return (
<div className='flex flex-col items-center z-20 text-center '>

    <h1>Choose from 1 of 12 zones.</h1>
   
    {userType === "Babysitter" && (
    <h1>Families there see your profile.</h1>
    )}
    <div className='mt-32 rounded-lg p-2 text-white bg-slate-700 hover:bg-slate-800 active:bg-slate-950'>
    <Dropdown inline className='z-10 h-28 overflow-auto   rounded-lg shadow w-56 '
      label="Choose Map Zone" placement="top"
    >
      <Dropdown.Item>
        Washington Heights
      </Dropdown.Item>
      <Dropdown.Item>
        Morningside Heights
      </Dropdown.Item>
      <Dropdown.Item>
        Central Harlem
      </Dropdown.Item>
      <Dropdown.Item>
        East Harlem
      </Dropdown.Item>
      <Dropdown.Item>
       Upper West Side
      </Dropdown.Item>
      <Dropdown.Item>
       Upper East Side
      </Dropdown.Item>
      <Dropdown.Item>
        Chelsea
      </Dropdown.Item>
      <Dropdown.Item>
        Midtown
      </Dropdown.Item>
      <Dropdown.Item>
       Midtown East
      </Dropdown.Item>
      <Dropdown.Item>
        Greenwich Village
      </Dropdown.Item>
      <Dropdown.Item>
      Lower East Side
      </Dropdown.Item>
      <Dropdown.Item>
        Tribeca
      </Dropdown.Item>
    </Dropdown>
    </div>
    </div>
  )
}

export default EdProDropdown;