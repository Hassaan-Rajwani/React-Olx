// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3QmOfSV2jcDSkE7jcifaZNcsKfKJYWrY",
    authDomain: "my-olx-1c80f.firebaseapp.com",
    projectId: "my-olx-1c80f",
    storageBucket: "my-olx-1c80f.appspot.com",
    messagingSenderId: "730052367556",
    appId: "1:730052367556:web:79bf92ebe0f74e67f26591"
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

async function getAds() {
    const querySnapshot = await getDocs(collection(db, "adUser"))
    const ads = []
    querySnapshot.forEach((doc) => {
        ads.push({ ...doc.data(), id: doc.id })
    })
    return ads
}

export {
    register,
    login,
    seell,
    getAds
}
