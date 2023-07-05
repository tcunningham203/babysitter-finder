import { Label, Radio } from 'flowbite-react';
import { useRef, useState } from "react";
import { app } from "../../Firebase";
// import firebase from "firebase/app";
import HeaderB from "./HeaderB";
import { BsCloudUpload } from "react-icons/bs";
import { NavLink } from "react-router-dom"
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
        <div className="bg-rose-200 min-h-screen">
            <HeaderB />
          
            <div className='mx-4 grid 2xl:grid-cols-12 xl:grid-cols-12  lg:grid-cols-12 md:grid-cols-11 sm:grid-cols-11 grid-cols-12 justify-between'>
                <div
                    className="2xl:col-start-4 2xl:col-span-6 xl:col-start-4 xl:col-span-6 lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-9 sm:col-start-3 sm:col-span-7  col-span-12 flex flex-row  rounded-lg align-center bg-white md:my-5 my-2 justify-evenly  items-center">
                    <h1 className="md:my-5 my-2 md:text-3xl text-lg text-center">
                        Edit your info.
                    </h1>
                    <NavLink to='/ProfileB' type="button" className="flex-col rounded bg-rose-700 px-2 sm:px-12 pb-2 pt-2.5  m-2 leading-normal text-white transition duration-150 ease-in-out hover:bg-rose-800  focus:outline-none focus:ring-0 active:bg-rose-950 xs:text-sm">
                        Save Changes
                    </NavLink>
                    </div>
                </div>
         
<div className='mx-4'>
            <div className="bg-rose-200 min-h-screen grid grid-cols-12 justify-center gap-4  ">

            <div className=" bg-rose-200 2xl:col-span-2  xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4">
                    <div
                        className=" flex  flex-col  align-center justify-center align-center items-center content-center  ">
                       
                       
                    

                        
                        <h5
                                className="pb-2 lg:text-2xl  md:text-xl text-lg">
                                Upload Profile Picture
                            </h5>
                            
                <input type="file" ref={file} className=" items-center text-sm flex-col w-56 rounded   leading-normal text-white bg-gray-600 transition duration-150 ease-in-out   focus:outline-none focus:ring-0  "/>
                <div className="flex bg-gray-600 mt-1 py-2 p-1 rounded-lg w-56 justify-evenly   items-center mb-2">
                <img className="rounded-lg" src={image} alt="" style={{ width: 160, alignSelf: 'center'}}/>
                <button type="button"  onClick={pictureUpload} className="ms-1 justify-center align-center content-center items-center flex-col rounded-lg bg-gray-800 pb-3 pt-3 w-11 leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-900  focus:outline-none focus:ring-0 active:bg-gray-950 ">
                <BsCloudUpload  size={22}/>
                        </button>
                     
              
                </div>   </div>

           


                        </div>
                    </div>




                    <div className=" bg-rose-200 2xl:col-span-2  xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
            <div className="  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  p-4">
                    <div
                        className=" flex  flex-col  align-center justify-between  ">
     
                        <h5
                                className="py-1  md:text-2xl text-lg">
                                Set Map Zone
                            </h5>



                            </div>
                        </div>
                    </div>


       <div className=" bg-rose-200 2xl:col-span-2  xl:col-span-3  lg:col-span-4  md:col-span-4  sm:col-span-6  col-span-12 ">
            <div className="flex justify-evenly rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-72 p-4 ">
                    <div
                        className=" flex  flex-col  content-evenly   ">
     
                        <h5
                                className=" text-center md:text-2xl text-lg pb-2 lg:text-2xl  ">
                                Set Map Zone
                            </h5>
                        
                            <div className="h-px mb-3 bg-rose-500 w-full "></div>




    <fieldset
      className="flex max-w-md flex-col gap-4" 
      
      id="radio"
    >
      
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





                    </div>
        </div></div>
    )
};

export default EditProfileB;