import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-cp-mML0wphpyUOHe-eOCm2lFKul66ik",
  authDomain: "estateguru-d858c.firebaseapp.com",
  databaseURL: "https://estateguru-d858c-default-rtdb.firebaseio.com",
  projectId: "estateguru-d858c",
  storageBucket: "estateguru-d858c.appspot.com",
  messagingSenderId: "645354606848",
  appId: "1:645354606848:web:9f4317c72e341aa28b63e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);
export const auth = getAuth();
