// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCmV38YiA2YfvlSehTFhjjd_TUbd83uU",
  authDomain: "first-choice-fruits-35edc.firebaseapp.com",
  projectId: "first-choice-fruits-35edc",
  storageBucket: "first-choice-fruits-35edc.appspot.com",
  messagingSenderId: "630869166233",
  appId: "1:630869166233:web:51d7c34e5a7d9bd6029008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;