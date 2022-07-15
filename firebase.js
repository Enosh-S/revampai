
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDXuApr3BEn-mLu64DCCsBkcia34VAAVmM",
    authDomain: "revampai-dev.firebaseapp.com",
    projectId: "revampai-dev",
    storageBucket: "revampai-dev.appspot.com",
    messagingSenderId: "286691895093",
    appId: "1:286691895093:web:7294dd12e141da43d00e7c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, app, firebaseConfig }