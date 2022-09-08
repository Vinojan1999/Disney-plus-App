import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    
    apiKey: "AIzaSyAD0ErywJx7zzh0pgDuOpQNgRF3oPVbIqE",
    authDomain: "disneyplus-app-14a8b.firebaseapp.com",
    projectId: "disneyplus-app-14a8b",
    storageBucket: "disneyplus-app-14a8b.appspot.com",
    messagingSenderId: "705460738071",
    appId: "1:705460738071:web:07bd28cb4feec82c826452",
    measurementId: "G-RH39DNKEPM"

};
  
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;