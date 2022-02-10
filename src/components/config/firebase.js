// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS4NBDyHzHw-ShtISkLsAvH72gkwCp3ik",
    authDomain: "olx-react-app-5e61c.firebaseapp.com",
    projectId: "olx-react-app-5e61c",
    storageBucket: "olx-react-app-5e61c.appspot.com",
    messagingSenderId: "910100153225",
    appId: "1:910100153225:web:7fa3d592f2f9c1853ad758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

function register(email, password) {
    //Asynchoronous functions
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Successfully Registered')
            // Signed in 
            const user = userCredential.user;
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Successfully Logged In')
            console.log('user --->', user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
}

export {
    register,
    login
}
