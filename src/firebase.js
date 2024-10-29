// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEaM8_mAEPw1rlDhDxZ5IQ85LjRn3QbPY",
    authDomain: "utecareerbridge.firebaseapp.com",
    projectId: "utecareerbridge",
    storageBucket: "utecareerbridge.appspot.com",
    messagingSenderId: "564519896458",
    appId: "1:564519896458:web:0578c50e2809a33a0ef473"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Export Firestore
export const db = getFirestore(firebaseApp);