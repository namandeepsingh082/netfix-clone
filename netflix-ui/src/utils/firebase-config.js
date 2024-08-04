import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLjt-PApGzCmmvpaVHj7PBZpC9dKQayJk",
  authDomain: "react-netflix-clone-e9e0e.firebaseapp.com",
  projectId: "react-netflix-clone-e9e0e",
  storageBucket: "react-netflix-clone-e9e0e.appspot.com",
  messagingSenderId: "28833281292",
  appId: "1:28833281292:web:6836c97886527ddb700529",
  measurementId: "G-FWXV35FMBK"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);