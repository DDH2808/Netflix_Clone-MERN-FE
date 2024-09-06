import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4SjBRbCnwUPdHFJVlM1yOoxMg42q5qX4",
  authDomain: "netflix-clone-mern-a20ff.firebaseapp.com",
  projectId: "netflix-clone-mern-a20ff",
  storageBucket: "netflix-clone-mern-a20ff.appspot.com",
  messagingSenderId: "993806034937",
  appId: "1:993806034937:web:ec998b7662c9da47007f28",
  measurementId: "G-LNSQ0392J0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
