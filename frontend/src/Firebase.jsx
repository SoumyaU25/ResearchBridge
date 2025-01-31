import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAzEZOl8Fyh0LJsnfW2WMmxas-paXjvOBg",
    authDomain: "researchbridge-a27d8.firebaseapp.com",
    databaseURL: "https://researchbridge-a27d8-default-rtdb.firebaseio.com",
    projectId: "researchbridge-a27d8",
    storageBucket: "researchbridge-a27d8.firebasestorage.app",
    messagingSenderId: "81828978375",
    appId: "1:81828978375:web:f60834622434f9a2af68e2",
    measurementId: "G-F1N6XTWDB7"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app)

export {auth, db, storage}
