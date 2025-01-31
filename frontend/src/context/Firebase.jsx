import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyAzEZOl8Fyh0LJsnfW2WMmxas-paXjvOBg",
    authDomain: "researchbridge-a27d8.firebaseapp.com",
    projectId: "researchbridge-a27d8",
    storageBucket: "researchbridge-a27d8.firebasestorage.app",
    messagingSenderId: "81828978375",
    appId: "1:81828978375:web:f60834622434f9a2af68e2",
    measurementId: "G-F1N6XTWDB7"
};

export const useFirebase = ()=> useContext(FirebaseContext)
const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props)=>{
    return <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
}