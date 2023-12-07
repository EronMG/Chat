// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

// Export initialized Firebase instances
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore(app);