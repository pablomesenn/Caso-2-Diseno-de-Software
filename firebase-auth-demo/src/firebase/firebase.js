/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKCiclx8SWp58-6bpZUOn34F9zaGoZiA",
  authDomain: "diseno-de-software-caso-2.firebaseapp.com",
  projectId: "diseno-de-software-caso-2",
  storageBucket: "diseno-de-software-caso-2.firebasestorage.app",
  messagingSenderId: "824562010920",
  appId: "1:824562010920:web:b83977a6f2a9d1e7a2de1d",
  measurementId: "G-R5Y9R75Y35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth}; */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgKCiclx8SWp58-6bpZUOn34F9zaGoZiA",
  authDomain: "diseno-de-software-caso-2.firebaseapp.com",
  projectId: "diseno-de-software-caso-2",
  storageBucket: "diseno-de-software-caso-2.firebasestorage.app",
  messagingSenderId: "824562010920",
  appId: "1:824562010920:web:b83977a6f2a9d1e7a2de1d",
  measurementId: "G-R5Y9R75Y35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);