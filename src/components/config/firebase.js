// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

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
const db = getFirestore()

async function register(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const uid = userCredential.user.uid
        await setDoc(doc(db, "users", uid), {
            first: name,
            email: email
        })
        alert('Successfully Registered and added in database')
    } catch (e) {
        alert(e.message)
    }
    }
    async function seell(title, categoory, description, price) {
        try {
            // const userCredential = createUserWithEmailAndPassword(auth, title, categoory, description, price)
            await addDoc(collection(db, "adUser"), {
                title: title,
                category: categoory,
                description: description,
                price: price
            })
            alert('Successfully Added')
        } catch (e) {
            alert(e.message)
        }
    }

    async function login(email, password) {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            alert('Successfully LoggedIn')
            return user
        } catch (e) {
            alert(e.message)
        }
    }

    export {
        register,
        login,
        seell
    }
