import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-cp-mML0wphpyUOHe-eOCm2lFKul66ik",
    authDomain: "estateguru-d858c.firebaseapp.com",
    databaseURL: "https://estateguru-d858c-default-rtdb.firebaseio.com",
    projectId: "estateguru-d858c",
    storageBucket: "estateguru-d858c.appspot.com",
    messagingSenderId: "645354606848",
    appId: "1:645354606848:web:9f4317c72e341aa28b63e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

// Example of creating a user with email and password
createUserWithEmailAndPassword(auth, "example@example.com", "password123")
    .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        console.log("User created:", user);
    })
    .catch((error) => {
        // User creation failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
    });

// function togglePasswordVisibility(inputId) {
//     const input = document.getElementById(inputId);
//     const icon = input.nextElementSibling.querySelector('i');

//     if (input.type === 'password') {
//         input.type = 'text';
//         icon.classList.remove('bi-eye');
//         icon.classList.add('bi-eye-slash');
//     } else {
//         input.type = 'password';
//         icon.classList.remove('bi-eye-slash');
//         icon.classList.add('fa-eye');
//     }
// }




// Get form element
const signupForm = document.getElementById('signup-form');

// Add submit event listener to the form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    let name = signupForm.name.value;
    let phone = signupForm.phone.value;
    let email = signupForm.mail.value;
    let cnic = signupForm.cnic.value;
    let password = signupForm.password.value;

    // Register user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        console.log("User created:", user);
        // TODO: Save user data to database or perform other actions
      })
      .catch((error) => {
        // User creation failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("User creation error:", errorCode, errorMessage);
        // TODO: Handle the error and display a message to the user
      });
  });