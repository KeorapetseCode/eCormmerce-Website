// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
	apiKey: "AIzaSyB1mTvOPtiL-l51SQO3j9B8sqBCKMz4ceU",
	authDomain: "online-sitolo.firebaseapp.com",
	projectId: "online-sitolo",
	storageBucket: "online-sitolo.appspot.com",
	messagingSenderId: "922417637706",
	appId: "1:922417637706:web:3e65285a4ba7d5e94ef9b3",
	measurementId: "G-ETFF338R3G"
  };
  */

// Import the functions you need from the SDKs you need
import *  as firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnJ_DiYf7A3NTPl1yQ6bCebflzKXwOEzQ",
  authDomain: "stasha-b5cc0.firebaseapp.com",
  projectId: "stasha-b5cc0",
  storageBucket: "stasha-b5cc0.appspot.com",
  messagingSenderId: "69207075525",
  appId: "1:69207075525:web:75e714b8fbaa12730a5eac"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectDatabase, projectFirestore };