import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgNhLaNQdM8hzrsDXVvJyfCYqhe3bkmY",
  authDomain: "online-store-c1026.firebaseapp.com",
  projectId: "online-store-c1026",
  storageBucket: "online-store-c1026.appspot.com",
  messagingSenderId: "574781985098",
  appId: "1:574781985098:web:1f729eb32dba853c4371b3",
  measurementId: "G-G1HL813EKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const stockItemsDB = getFirestore(app)
//const analytics = getAnalytics(app);