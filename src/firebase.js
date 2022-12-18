// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "to-do-app-1818.firebaseapp.com",
    projectId: "to-do-app-1818",
    storageBucket: "to-do-app-1818.appspot.com",
    messagingSenderId: "4212990256",
    appId: "1:4212990256:web:367557724f2344e59c28f5",
    measurementId: "G-39X6P3V8EZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
