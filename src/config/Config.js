import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyByu7G5GB0Qyss7mxTap5Mb2MkeMQ_RIPg",
    authDomain: "pracownia-klej.firebaseapp.com",
    projectId: "pracownia-klej",
    storageBucket: "pracownia-klej.appspot.com",
    messagingSenderId: "27943477919",
    appId: "1:27943477919:web:6f898e077ba3af278338aa",
    measurementId: "G-7YW1WQZ8B1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage()


export { auth, db, storage };



