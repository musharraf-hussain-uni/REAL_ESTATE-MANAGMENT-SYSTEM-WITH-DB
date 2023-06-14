/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

//      DB

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);
const auth = getAuth();

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();
let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);

// script.js
// Add event listener to the login button
// const loginButton = document.getElementById("login-button");
// loginButton.addEventListener("click", handleLogin);

// // Function to handle login functionality
// function handleLogin(event) {
//   event.preventDefault();

//   // Perform user authentication and validation here
//   // If the user is authenticated and validated, redirect to the user information page
//   const loginSuccess = true; // Replace with your authentication logic

//   if (loginSuccess) {
//     // Redirect to the user information page
//     window.location.href = "user-profile.html";
//   }
// }

// Get the form element and result box
var loginForm = document.getElementById("login-form");
var resultBox = document.getElementById("result-box");
var result = document.getElementById("result");

// Add form submit event listener

const handleSubmit = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User Logged successful
      const user = userCredential.user;
      // console.log("User LoggedIn:", user);
      // TODO: Save user data to database or perform other actions
    })
    .catch((error) => {
      // User login failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("User loggedIn error:", errorCode, errorMessage);
      // TODO: Handle the error and display a message to the user
    });

  console.log(email, password);
};

// Add form submit event listener
loginForm.addEventListener("submit", handleSubmit);

// function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the entered username and password
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;

//   // Validate the username and password
//   if (email === 'your_email' && password === 'your_password') {
//     result.textContent = email + ' successfully logged in';
//     resultBox.style.color = 'green';
//   } else {
//     result.textContent = 'Sorry, we can\'t find your ID. Please register yourself first.';
//     resultBox.style.color = 'red';
//   }

//   // Clear the form fields
//   loginForm.reset();
// }
