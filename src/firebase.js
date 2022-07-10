import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-d3adb.firebaseapp.com",
  projectId: "tutorial-d3adb",
  storageBucket: "tutorial-d3adb.appspot.com",
  messagingSenderId: "36848129767",
  appId: "1:36848129767:web:465919696009ad9c79b442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);
