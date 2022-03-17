// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIMevYdJrTk3SMY-8yt2_jdm52FNfLU6U",
  authDomain: "ecommerce-platform-c4847.firebaseapp.com",
  projectId: "ecommerce-platform-c4847",
  storageBucket: "ecommerce-platform-c4847.appspot.com",
  messagingSenderId: "246286300453",
  appId: "1:246286300453:web:7c28c23da1df5b4a6796cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();  
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
        console.log("error creating user", error.message);
    }
  }

  return userDocRef;
}; 