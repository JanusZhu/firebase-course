import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAO5FLB0PQhY-jEfigeeSiyrN6wchA_rrg",
  authDomain: "fir-course-ca258.firebaseapp.com",
  projectId: "fir-course-ca258",
  storageBucket: "fir-course-ca258.appspot.com",
  messagingSenderId: "883667883224",
  appId: "1:883667883224:web:b0eb9e5abccc838ac9b3ad",
  measurementId: "G-J4KDTLT51F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
