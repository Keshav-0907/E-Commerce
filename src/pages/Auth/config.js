// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyDGdRs2dwmrIq0SQmm2h_ceICTRu5UVyfU",
  authDomain: "shop1-e89e9.firebaseapp.com",
  projectId: "shop1-e89e9",
  storageBucket: "shop1-e89e9.appspot.com",
  messagingSenderId: "478346463616",
  appId: "1:478346463616:web:ad57a0ca7f6b25dfb41965",
  measurementId: "G-YPHXRZB2HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {db, auth};