
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

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
export const auth = getAuth(app);
export const db = getFirestore(app);
