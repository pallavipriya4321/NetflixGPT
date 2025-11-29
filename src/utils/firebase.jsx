// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsYK4YGm7tyZWvEcheQqu8eK-HgQtdIjc",
  authDomain: "netflixgpt-14e56.firebaseapp.com",
  projectId: "netflixgpt-14e56",
  storageBucket: "netflixgpt-14e56.firebasestorage.app",
  messagingSenderId: "559347389838",
  appId: "1:559347389838:web:5fc2e8f3b6961d457280df",
  measurementId: "G-FCD720P4EC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
