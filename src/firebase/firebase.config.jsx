// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBft5ri4ESAAqgI6F8KUW3x0TMWbUrwzUw",
  authDomain: "doctor-ariful-islam.firebaseapp.com",
  projectId: "doctor-ariful-islam",
  storageBucket: "doctor-ariful-islam.appspot.com",
  messagingSenderId: "704214031980",
  appId: "1:704214031980:web:defa967c63f6869294c249",
  measurementId: "G-CKDTX2E1WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
