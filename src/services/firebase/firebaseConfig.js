// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4_rnEi0ddgo1nDDgeDdlxgi7Yw-3Py1Q",
  authDomain: "mi-e-commerce.firebaseapp.com",
  projectId: "mi-e-commerce",
  storageBucket: "mi-e-commerce.appspot.com",
  messagingSenderId: "531896142537",
  appId: "1:531896142537:web:5620af4f0b7508f7e29b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)