import { Label, Radio } from 'flowbite-react';
import { useRef, useState } from "react";
import { app } from "../../Firebase";
// import firebase from "firebase/app";
import HeaderB from "./HeaderB";


import { GiCancel } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { TfiSave } from "react-icons/tfi"
import { MdSmokeFree, MdSmokingRooms } from "react-icons/md";
import { LuTimerOff, LuTimer  } from "react-icons/lu";
import "@firebase/storage";
function EditProfileB() {
    const [image, setImage] = useState("https://placehold.co/400")
    const file = useRef(null)
    function pictureUpload() {
        console.log(file.current.files[0]);
        const storage = app.storage().ref("users/profile.jpg")
        const newFile = storage.child(file.current.files[0].name)
        newFile.put(file.current.files[0]).then(function () {
            console.log("done");
        })
        setImage(file.current.value);
    }
    return (
        <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24  font-cool">
            <HeaderB />

            <div className=' justify-between z-10'>
                <div
                    className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
                    <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium ">
                        Update your brand.
                    </h1>  


                </div>
            </div>

            <div className='mx-8 md:mx-3 xl:mx-16 2xl:mx-44'>
                <div className="bg-slate-200  grid grid-cols-12 justify-center gap-4  ">

                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className=" relative  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4">
                            <div
                                className=" flex flex-col  align-center justify-center align-center items-center content-center  ">

<button type="button" onClick={pictureUpload} className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950  ">
                                        <TfiSave size={28} />
                                    </button>



                                <h5
                                    className=" text-center md:text-xl text-lg">
                                    Upload Profile Picture
                                </h5>
                                <div className="h-px mb-3 bg-slate-500 w-full "></div>
                                <input type="file" ref={file} className=" items-center text-sm flex-col w-56 rounded   leading-normal text-white bg-gray-600 transition duration-150 ease-in-out   focus:outline-none focus:ring-0  " />
                                <div className="flex bg-gray-600 mt-1 py-2 p-1 rounded-lg w-56 justify-evenly   items-center mb-2">
                                    <img className="rounded-lg" src={image} alt="" style={{ width: 160, alignSelf: 'center' }} />
                                  
                                  

                                </div>   </div>




                        </div>
                    </div>

                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">

<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>

                                <h5
                                    className=" text-center md:text-xl text-lg  ">
                                    Set Map Zone
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>
                                <fieldset
                                    className="flex max-w-md flex-col gap-4"

                                    id="radio">
                                    <div className="flex items-center gap-4" >
                                        <Radio
                                            defaultChecked
                                            id="upper-man"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="upper-man" style={{ fontSize: 18 }}>
                                            Upper Manhattan
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Radio
                                            defaultChecked
                                            id="harlem"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="harlem" style={{ fontSize: 18 }}>
                                            Harlem
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Radio
                                            defaultChecked
                                            id="upper-east"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="upper-east" style={{ fontSize: 18 }}>
                                            Upper East Side
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Radio
                                            defaultChecked
                                            id="upper-west"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="upper-west" style={{ fontSize: 18 }}>
                                            Upper West Side
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Radio
                                            defaultChecked
                                            id="midtown"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="midtown" style={{ fontSize: 18 }}>
                                            Midtown
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Radio
                                            defaultChecked
                                            id="lower-man"
                                            name="NotSureWhatToPut"
                                            value="NotSureWhatToPut"
                                        />
                                        <Label htmlFor="lower-man" style={{ fontSize: 18 }}>
                                            Lower Manhattan
                                        </Label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>




                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Babysitting Experience
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=""
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none  w-full  h-52 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                            </div>
                        </div>
                    </div>



                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Other Experience
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=""
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none  w-full  h-52 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                            </div>
                        </div>
                    </div>



                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Transportation
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=""
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none  w-full  h-52 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                            </div>
                        </div>
                    </div>





                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Activities and Games
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=""
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none  w-full  h-52 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                            </div>
                        </div>
                    </div>





                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Handling Behavior
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=""
                                rows={4}
                                required
                                className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none  w-full  h-52 text-lg border-gray-300 rounded-md"
                            />
                        </div>

                            </div>
                        </div>
                    </div>


                    <div className=" bg-slate-200   xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
                        <div className="flex justify-evenly relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                            <div
                                className=" flex  flex-col  content-evenly   ">
<button type="button"  className="absolute justify-center flex bottom-0 right-0 rounded-br-lg rounded-tl-3xl bg-red-700 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900  focus:outline-none focus:ring-0 active:bg-red-950 ">
                                        <TfiSave size={28} />
                                    </button>
                                <h5
                                    className=" text-center md:text-xl text-lg   ">
                                    Badges
                                </h5>

                                <div className="h-px mb-3 bg-slate-500 w-full "></div>


                                <div className="grid grid-cols-3">                         
<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 ">
<LuTimer size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Short Notice OK
</p>
</div>

<div className="flex items-center justify-center w-full mb-4">
  
  <label for="toggleA" className="flex items-center cursor-pointer">
 
    <div class="relative">
   
      <input type="checkbox" id="toggleA" className="sr-only"/>
   
      <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>
   
      <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
    </div>
  </label>
</div>

<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 ">
<LuTimerOff size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
No Short Notice
</p>
</div>




<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<MdPets size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Pets OK
</p>
</div>

<div className="flex items-center justify-center w-full mb-4">
  
  <label for="toggleB" className="flex items-center cursor-pointer">
 
    <div class="relative">
   
      <input type="checkbox" id="toggleB" className="sr-only"/>
   
      <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>
   
      <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
    </div>
  </label>
</div>

<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<GiCancel size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
No Pets
</p>
</div>



<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<MdSmokingRooms size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Smoker
</p>
</div>

<div className="flex items-center justify-center w-full mb-4">
  
  <label for="toggleC" className="flex items-center cursor-pointer">
 
    <div class="relative">
   
      <input type="checkbox" id="toggleC" className="sr-only"/>
   
      <div className="block bg-slate-300 w-14 h-8 rounded-full"></div>
   
      <div className="dot absolute left-1 top-1 bg-green-500 w-6 h-6 rounded-full transition"></div>
    </div>
  </label>
</div>

<div className="flex flex-col justify-evenly text-center items-center ">
<p className="  flex text-base/6 text-neutral-600 " >
<MdSmokeFree size={33}/>
</p>
<p className=" xs:text-xs text-lg flex text-base/6 text-neutral-600 " style={{ fontSize: 12 }}>
Non Smoker
</p>
</div>


</div>











                            </div>
                        </div>
                    </div>





                </div>
            </div></div>
    )
};

export default EditProfileB;