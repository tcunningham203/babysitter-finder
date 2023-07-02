import { useRef, useState } from "react";
import { app } from "../../Firebase";
import firebase from "firebase/app";
import HeaderB from "./HeaderB";
import "@firebase/storage";
function EditProfileB () {
    const [image, setImage] = useState("https://placehold.co/400")
    const file = useRef(null)
    function pictureUpload(){
        console.log(file.current.files[0]);
        const storage = app.storage().ref("users/profile.jpg")
        const newFile = storage.child(file.current.files[0].name)
        newFile.put(file.current.files[0]).then(function(){
            console.log("done");
        })
        // setImage(file.current.value);
    }
    return(
        <div>
            <HeaderB/>
          <h1>EDIT BABYSITTER PROFILE</h1>
          <input type="file" ref={file}/>
          <button onClick={pictureUpload}>Submit</button>
          <img src={image} alt="Profile Picture" />
        </div>
    )
};

export default EditProfileB;