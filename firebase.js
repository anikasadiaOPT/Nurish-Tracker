// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LuqzcGGsQ-IcW6qhvZSXXnIAEP-5MIc",
  authDomain: "health-management-9bd42.firebaseapp.com",
  projectId: "health-management-9bd42",
  storageBucket: "health-management-9bd42.appspot.com",
  messagingSenderId: "557730129122",
  appId: "1:557730129122:web:5e1d96d0e32046a8ef6abb",
  measurementId: "G-RMSJWR7SYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Analytics if supported
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export Firestore and Analytics
export { firestore, analytics };
