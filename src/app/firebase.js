// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY10pnJbIH9Ox_tTfKDmInrKDOnRoyw1g",
  authDomain: "inventory-management-app-238b4.firebaseapp.com",
  projectId: "inventory-management-app-238b4",
  storageBucket: "inventory-management-app-238b4.appspot.com",
  messagingSenderId: "782956092129",
  appId: "1:782956092129:web:3c09dba0be55e1a6ea35a0",
  measurementId: "G-9H3DTEGN8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
