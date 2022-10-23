// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDCLjpjebaTLPJv6Kmyvn_hqcHbQzV6654",
  authDomain: "zaraclone-93883.firebaseapp.com",
  projectId: "zaraclone-93883",
  storageBucket: "zaraclone-93883.appspot.com",
  messagingSenderId: "812894038768",
  appId: "1:812894038768:web:30674d48a87f09106df035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider).then((res)=>{
         const name= res.user.displayName;
         const email= res.user.email;
         const profilePic = res.user.photoURL
  }).catch((err)=>{
    console.log(err);
  })
}
