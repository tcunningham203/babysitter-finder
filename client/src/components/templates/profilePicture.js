import { useState, useEffect, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { app } from "../../Firebase";
import "@firebase/storage";

function ProfilePicture({ currentProfilePic, profilePicUploaded }) {
  const [image, setImage] = useState(currentProfilePic || "https://placehold.co/400");
  const storage = getStorage();
  const file = useRef(null);

  useEffect(() => {
    // Empty dependency array to only run once, when component mounts
    const profileRef = ref(storage, `users/profile.jpg`);
    getDownloadURL(profileRef)
      .then((url) => {
        setImage(url);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);

  function pictureUpload() {
    console.log(file.current.files[0]);
    const fileName = file.current.files[0].name;
    const storageRef = ref(storage, `users/${fileName}`);

    uploadBytes(storageRef, file.current.files[0])
      .then(() => {
        console.log("File upload successful");
        return getDownloadURL(storageRef);
      })
      .then((url) => {
        console.log(url);
        setImage(url);
        profilePicUploaded(url);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col items-center">
    <div className="flex items-center gap-2">
      <input type="file" ref={file} className="w-48 mb-4 rounded" />
      <button onClick={pictureUpload} className="bg-black text-white px-4 py-2 mb-4 rounded">
        Submit
      </button>
    </div>
    <img src={image} alt="" className="w-60 h-36 m-auto" />
  </div>
  );
}

export default ProfilePicture;