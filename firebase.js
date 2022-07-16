
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBZumVDd3l3xeE4zXjYpCeFRIadGyM_AG8",
    authDomain: "revampai-2dev.firebaseapp.com",
    projectId: "revampai-2dev",
    storageBucket: "revampai-2dev.appspot.com",
    messagingSenderId: "1033633360548",
    appId: "1:1033633360548:web:f643682ceefcf12e929431"

  };

// Initialize Firebase
const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, app, firebaseConfig }