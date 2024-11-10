
// app/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCotwCT48tMja2awd1aP6bcEDSgX4qepiM",
    authDomain: "refoodify-9118a.firebaseapp.com",
    projectId: "refoodify-9118a",
    storageBucket: "refoodify-9118a.appspot.com",
    messagingSenderId: "212334773470",
    appId: "1:212334773470:web:21ea3e283b9340f8d72e4f",
    measurementId: "G-HC3CN834YL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth };