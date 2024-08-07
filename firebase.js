// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9LuqzcGGsQ-IcW6qhvZSXXnIAEP-5MIc",
  authDomain: "health-management-9bd42.firebaseapp.com",
  projectId: "health-management-9bd42",
  storageBucket: "health-management-9bd42.appspot.com",
  messagingSenderId: "557730129122",
  appId: "1:557730129122:web:5e1d96d0e32046a8ef6abb",
  measurementId: "G-RMSJWR7SYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore};