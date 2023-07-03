// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Commented out to remove compiling errors until firebase is ready
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH3UjkIqUlfdN-4uNHb20im6bTSl2s4MU",
  authDomain: "babysitter-app-c3f19.firebaseapp.com",
  projectId: "babysitter-app-c3f19",
  storageBucket: "babysitter-app-c3f19.appspot.com",
  messagingSenderId: "768067173740",
  appId: "1:768067173740:web:cce00149b24e3ebbc98749",
  measurementId: "G-ZEDMV4N346"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Commented out to remove compiling errors until firebase is ready
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);