import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyByu7G5GB0Qyss7mxTap5Mb2MkeMQ_RIPg",
    authDomain: "pracownia-klej.firebaseapp.com",
    projectId: "pracownia-klej",
    storageBucket: "pracownia-klej.appspot.com",
    messagingSenderId: "27943477919",
    appId: "1:27943477919:web:6f898e077ba3af278338aa",
    measurementId: "G-7YW1WQZ8B1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };


