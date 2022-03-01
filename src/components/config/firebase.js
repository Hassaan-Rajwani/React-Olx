// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage();

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
async function seell(title, categoory, description, price, files) {
    let urls = []
    for (let i = 0; i < files.length; i++) {
        const storageRef = ref(storage, `/UserImage/${files[i].name}`);
        const response = await uploadBytes(storageRef, files[i]);
        const url = await getDownloadURL(response.ref);
        urls.push(url)
        console.log(urls)
    }
    try {
        await addDoc(collection(db, "adUser"), {
            title: title,
            category: categoory,
            description: description,
            price: price,
            image: urls
        })
        alert('Successfully Added')
    } catch (e) {
        alert(e.message)
    }
}

async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password)
}

async function getAds() {
    const querySnapshot = await getDocs(collection(db, "adUser"))
    const ads = []
    querySnapshot.forEach((doc) => {
        ads.push({ ...doc.data(), id: doc.id })
    })
    return ads
}

async function getAdDetails(temp) {
    const docRef = doc(db, "adUser", temp);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    return data
}

// async function uploadimageInStorage(files) {
//     let urls = []
//     for (let i = 0; i < files.length; i++) {
//         const storageRef = ref(storage, `/UserImage/${files[i].name}`);
//         const response = await uploadBytes(storageRef, files[i]);
//         const url = await getDownloadURL(response.ref);
//         urls.push(url)
//         console.log(urls)
//     }
//     return urls
// }

export {
    register,
    login,
    seell,
    getAds,
    getAdDetails,
    // uploadimageInStorage
}
