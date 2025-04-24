import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8Wt0n52bG_NLlV6AcKrO3FNiY__LaOEs",
  authDomain: "preply-25d57.firebaseapp.com",
  projectId: "preply-25d57",
  storageBucket: "preply-25d57.firebasestorage.app",
  messagingSenderId: "325945294356",
  appId: "1:325945294356:web:36f3c9387c6e1f509db101",
  measurementId: "G-LRMKPDM9YM"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);