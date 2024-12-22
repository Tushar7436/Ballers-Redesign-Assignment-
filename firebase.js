// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTDiWHhSJpCG6RyFFWaQfC59_W9bZ-d0A",
  authDomain: "ballers-143c2.firebaseapp.com",
  projectId: "ballers-143c2",
  storageBucket: "ballers-143c2.firebasestorage.app",
  messagingSenderId: "38244611955",
  appId: "1:38244611955:web:9545721b913464e969f706",
  measurementId: "G-400KJ6CF8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);