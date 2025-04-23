// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);