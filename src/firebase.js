// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIf6c1DWVJWkccj-EpqCHkWDKpqpRYzao",
  authDomain: "dsmp-quotes.firebaseapp.com",
  projectId: "dsmp-quotes",
  storageBucket: "dsmp-quotes.appspot.com",
  messagingSenderId: "229607891553",
  appId: "1:229607891553:web:34849f3223bb905efd0020",
  measurementId: "G-LN8ELTJ8NJ"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app)