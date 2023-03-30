import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCFYAfkPNMMQ7ihbUUdIQwm_moKCIsvJEY",
    authDomain: "text-adventure-backend.firebaseapp.com",
    projectId: "text-adventure-backend",
    storageBucket: "text-adventure-backend.appspot.com",
    messagingSenderId: "773717527245",
    appId: "1:773717527245:web:7617a4f258e9a09821b784",
    measurementId: "G-KJCKHN3PVN"
  
});

const db = getFirestore(firebaseApp);

export const storiesRef = collection(db, "stories");