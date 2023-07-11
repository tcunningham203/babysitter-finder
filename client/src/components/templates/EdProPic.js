import React from 'react';
import { BsCloudUpload } from "react-icons/bs";
const EdProPic = ({ file, image, pictureUpload }) => {
  return (
    <div className='flex flex-col align-center items-center'>
    
      <input
        type="file"
        ref={file}
        className="text-sm flex-col w-56 rounded mb-1 leading-normal text-white bg-gray-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0"
      />
      <div className="flex bg-gray-600 p-1 rounded-lg w-56 justify-evenly items-center mb-2">
        <img
          className="rounded-lg"
          src={image}
          alt=""
          style={{ width: 160, alignSelf: 'center' }}
        />
        <button
          type="button"
          onClick={pictureUpload}
          className="ms-1 justify-center align-center content-center items-center flex-col rounded-lg bg-gray-800 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-950"
        >
          <BsCloudUpload size={22} />
        </button>
      </div>
    </div>
  );
};

export default EdProPic;
