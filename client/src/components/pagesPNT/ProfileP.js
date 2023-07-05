import { useRef, useState, useEffect } from "react";
//Import graphql and the model 
import HeaderP from "../pagesPNT/HeaderP";
import {getStorage, ref, uploadBytes, getDownloadURL} from "@firebase/storage";
function ProfileP () {
    // useQuery to grab the current user
    // Grab their name from the database and store in a variable
    const name = ''
    const [image, setImage] = useState("https://placehold.co/400")
    const storage = getStorage()
    const profileRef = ref(storage, `users/profile_${name}.jpg`)
    useEffect(()=> {
        getDownloadURL(profileRef).then(url => {
            console.log(url)
            setImage(url)
        })
    }, [])
    const file = useRef(null)
    function pictureUpload(){
        console.log(file.current.files[0]);

        uploadBytes(profileRef,file.current.files[0] ).then(snapshot => {
            console.log('File was added');
            getDownloadURL(profileRef).then(url => {
                console.log(url)
                setImage(url)
            })
        })


    }
    return(
        <div>
                <HeaderP/>
          <h1>PNT Profile Page</h1>
          <input type="file" ref={file}/>
          <button onClick={pictureUpload}>Submit</button>
          <img src={image} alt="" />
        </div>
    )
};

export default ProfileP;