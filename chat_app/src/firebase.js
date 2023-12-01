// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC5xLSi2iC2zQSQky5t7Anrm3fmERaorgc",
    authDomain: "durable-verve-329210.firebaseapp.com",
    projectId: "durable-verve-329210",
    storageBucket: "durable-verve-329210.appspot.com",
    messagingSenderId: "352096505213",
    appId: "1:352096505213:web:fc4a1a5257a87de3761014",
    measurementId: "G-M79LT45YY5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()