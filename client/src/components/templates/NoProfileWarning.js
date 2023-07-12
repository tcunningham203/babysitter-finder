

const NoProfileWarning = () => {



    return (
<div className="flex flex-row align-stretch items-stretch justify-center mt-24 z-10 animate-fade-in-word">
            <div className=" flex  mx-4 align-center justify-center bg-white rounded   z-10">
              <div className="p-5 relative">
                <h5 className=" text-6xl pb-2 text-center font-neat font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  You don't have a profile yet
                </h5>
                <div className="h-px bg-slate-500 w-full mb-2"></div>

                <p className=" font-cool text-center text-xl pb-2 text-base/6">
             Edit your profile in the Profile tab to start using CubCare. 
                </p>
             

              

             
                    </div>
                </div>
            </div>
            );
};


            export default NoProfileWarning;