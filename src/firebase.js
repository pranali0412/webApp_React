// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP0SM_EdCIbrwzBkpulFEOFTsfdX3OlIQ",
  authDomain: "chat-d09a1.firebaseapp.com",
  projectId: "chat-d09a1",
  storageBucket: "chat-d09a1.appspot.com",
  messagingSenderId: "917526401660",
  appId: "1:917526401660:web:a94a2f0bf8bb5ea48f6ff9",
  measurementId: "G-FZB5PP8D82"
};
{/* <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js">javascript"</script> */}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();