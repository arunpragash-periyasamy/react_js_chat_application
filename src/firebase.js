import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs3u2snnCdcV1Ajw2wQYbIIRxKkgXFn8s",
  authDomain: "chat-4e96f.firebaseapp.com",
  projectId: "chat-4e96f",
  storageBucket: "chat-4e96f.appspot.com",
  messagingSenderId: "729101519898",
  appId: "1:729101519898:web:dc3ef8830be18e01ba55a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();