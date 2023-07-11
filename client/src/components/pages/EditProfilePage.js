
import { useRef, useState } from "react";
import { app } from "../../Firebase";
import LandingPage from "./LandingPage"
import Auth from "../../utils/auth";

import "@firebase/storage";
import EdProContainer from "../templates/EdProContainer";
import EdProDropdown from "../templates/EdProDropdown";
import EdProForm from "../templates/EdProForm";
import EdProPic from "../templates/EdProPic";
import EdProSwitch from "../templates/EdProSwitch";

function EditProfile() {
  const [image, setImage] = useState("https://placehold.co/400");
  const file = useRef(null);

  function pictureUpload() {
    console.log(file.current.files[0]);
    const storage = app.storage().ref("users/profile.jpg");
    const newFile = storage.child(file.current.files[0].name);
    newFile.put(file.current.files[0]).then(function () {
      console.log("done");
    });
    setImage(file.current.value);
  }

  if (Auth.loggedIn()) {
    return (
        <div className="bg-slate-300 min-h-screen pt-16 sm:pt-20 md:pt-24  font-cool">


        <div className=' justify-between z-10'>
            <div
                className="flex sm:flex-row flex-col rounded-lg align-center  md:mt-5 mt-2 justify-center  items-center md:py-5 py-2 font-neat">
                <h1 className=" lg:text-5xl px-1 md:text-4xl text-3xl text-center font-medium ">
                    Update your brand.
                </h1>


            </div>
        </div>

        <div className="    justify-center z-10 ">
            <div className="  flex flex-wrap justify-center 2xl:mx-60 z-10 animate-fade-in-word ">

        <EdProContainer title="Upload Profile Picture">
          <EdProPic image={image} fileRef={file} onPictureUpload={pictureUpload} />
        </EdProContainer>

        <EdProContainer title="Set Map Zone">
          <EdProDropdown />
        </EdProContainer>

        <EdProContainer title="Babysitting Experience">
          <EdProForm placeholder="Enter your babysitting experience..." />
        </EdProContainer>

        <EdProContainer title="Other Experience">
          <EdProForm placeholder="Enter your other experience..." />
        </EdProContainer>

        <EdProContainer title="Transportation">
          <EdProForm placeholder="Enter your transportation details..." />
        </EdProContainer>

        <EdProContainer title="Activities and Games">
          <EdProForm placeholder="Enter activities and games you like to do..." />
        </EdProContainer>

        <EdProContainer title="Handling Behavior">
          <EdProForm placeholder="Enter your handling behavior..." />
        </EdProContainer>

        <EdProContainer title="Badges">
          <EdProSwitch />
        </EdProContainer>
      </div>
      </div>
      </div>
    );
  } else {
    return (
      <LandingPage />
    );
  }
};

export default EditProfile;
