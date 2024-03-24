import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGjW8iz4Apsmad0yRGF2JOvsRlcofS7GA",
    authDomain: "m12-calendar.firebaseapp.com",
    projectId: "m12-calendar",
    storageBucket: "m12-calendar.appspot.com",
    messagingSenderId: "448683599098",
    appId: "1:448683599098:web:95bbdc9a66cab27cc51543"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };