// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX6V_C7gaf9LDZM2u79yrkVQfC3aDgb5Y",
  authDomain: "foodshop-eb1b8.firebaseapp.com",
  projectId: "foodshop-eb1b8",
  storageBucket: "foodshop-eb1b8.appspot.com",
  messagingSenderId: "79087241507",
  appId: "1:79087241507:web:8f14155abf5383b348a496",
  measurementId: "G-V3XQ90X5JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth