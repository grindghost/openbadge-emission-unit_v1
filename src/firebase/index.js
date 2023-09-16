// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN9kBsJ0pVgAF8LsKGbY4ZkUVLStUle9g",
  authDomain: "backpacks3.firebaseapp.com",
  databaseURL: "https://backpacks3-default-rtdb.firebaseio.com",
  projectId: "backpacks3",
  storageBucket: "backpacks3.appspot.com",
  messagingSenderId: "379848683602",
  appId: "1:379848683602:web:c098398938547878842f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db }