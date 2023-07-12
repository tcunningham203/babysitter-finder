import React from 'react';
import { Dropdown } from 'flowbite-react';
import { getUserType } from "../../utils/helpers";
const EdProDropdown = ({zone,handleChange}) => {
    const userType = getUserType();
  return (
<div className='flex flex-col items-center z-20 text-center '>

    <h1>Choose from 1 of 12 zones.</h1>
   
    {userType === "Babysitter" && (
    <h1>Families there see your profile.</h1>
    )}
   <h2 style={{textAlign:'center'}}>{zone}</h2> 
    <div className='mt-32 rounded-lg p-2 text-white bg-slate-700 hover:bg-slate-800 active:bg-slate-950'>
    <Dropdown name='zone' onChange={handleChange} defaultValue={zone} inline className='z-10 h-28 overflow-auto   rounded-lg shadow w-56 '
      label="Choose Map Zone" placement="top"
    >
      <Dropdown.Item value={' Washington Heights'}>
        Washington Heights
      </Dropdown.Item>
      <Dropdown.Item value={'Morningside Heights'}>
        Morningside Heights
      </Dropdown.Item>
      <Dropdown.Item value={'Central Harlem'}>
        Central Harlem
      </Dropdown.Item>
      <Dropdown.Item value={'East Harlem'}>
        East Harlem
      </Dropdown.Item>
      <Dropdown.Item value={'Upper West Side'}>
       Upper West Side
      </Dropdown.Item>
      <Dropdown.Item value={'Upper East Side'}>
       Upper East Side
      </Dropdown.Item>
      <Dropdown.Item value=' Chelsea'>
        Chelsea
      </Dropdown.Item>
      <Dropdown.Item value=' Midtown'>
        Midtown
      </Dropdown.Item>
      <Dropdown.Item value='Midtown East'>
       Midtown East
      </Dropdown.Item>
      <Dropdown.Item value={'Greenwich Village'}>
        Greenwich Village
      </Dropdown.Item>
      <Dropdown.Item value={'Lower East Side'}>
      Lower East Side
      </Dropdown.Item>
      <Dropdown.Item value={'Tribeca'}>
        Tribeca
      </Dropdown.Item>
    </Dropdown>
    </div>
    </div>
  )
}

export default EdProDropdown;