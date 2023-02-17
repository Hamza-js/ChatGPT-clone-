import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBecpZR0Jk90a8hrfaP8AaRjRibayOQX9I",
  authDomain: "chatgpt-clone-9dec0.firebaseapp.com",
  projectId: "chatgpt-clone-9dec0",
  storageBucket: "chatgpt-clone-9dec0.appspot.com",
  messagingSenderId: "878671279909",
  appId: "1:878671279909:web:8b4a15dba7876317eccccc",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
