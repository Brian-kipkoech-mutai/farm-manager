 // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4prWxuehvlgzLahIzJ0aRVCEOZLyLJG4",
  authDomain: "farm-manager-2e47f.firebaseapp.com",
  projectId: "farm-manager-2e47f",
  storageBucket: "farm-manager-2e47f.appspot.com",
  messagingSenderId: "390925467635",
  appId: "1:390925467635:web:937327e86b7bb3d7789c86",
  measurementId: "G-55SNVNV7JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const db= getFirestore(app);
export {db}