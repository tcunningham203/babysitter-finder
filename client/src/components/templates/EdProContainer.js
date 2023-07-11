import React from 'react';

const EdProContainer = ({ title, children  }) => {
  return (
   
      <div className="  m-2 md:m-4  font-cool sm:w-80 w-72  z-10">
       
          <div className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4">
            <div className="flex  flex-col  align-center h-64 justify-between">
              <h5 className="text-center md:text-xl text-lg ">
              { title }
              </h5>
              <div className="h-px mb-3 bg-slate-500 w-full "></div>
              {children}
            </div>
          </div>
        </div>
    
 
  );
};

export default EdProContainer;
