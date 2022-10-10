// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs3u2snnCdcV1Ajw2wQYbIIRxKkgXFn8s",
  authDomain: "chat-4e96f.firebaseapp.com",
  projectId: "chat-4e96f",
  storageBucket: "chat-4e96f.appspot.com",
  messagingSenderId: "729101519898",
  appId: "1:729101519898:web:dc3ef8830be18e01ba55a3",
  measurementId: "G-RDN54XZ4CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);