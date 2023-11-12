import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8S2m-qFoVfOX0-2KYyeH8bWD5fGgplfA",
    authDomain: "maybook-app-storage.firebaseapp.com",
    projectId: "maybook-app-storage",
    storageBucket: "maybook-app-storage.appspot.com",
    messagingSenderId: "887325035883",
    appId: "1:887325035883:web:f4ffccdc3462bce092102e",
    measurementId: "G-1ZRG4XTRX5"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }