import { useRef, useState } from "react";
import { app } from "../../Firebase";
import firebase from "firebase/app";
import HeaderP from "../pagesPNT/HeaderP";
import "@firebase/storage";
function ProfileP () {
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
                <HeaderP/>
          <h1>PNT Profile Page</h1>
          <input type="file" ref={file}/>
          <button onClick={pictureUpload}>Submit</button>
          <img src={image} alt="Profile Picture" />
        </div>
    )
};

export default ProfileP;