import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBwjM9_K7fJoSbB7UVWO6Ucrp_5lL1rDEA",
    authDomain: "journal-app-react-a98b1.firebaseapp.com",
    projectId: "journal-app-react-a98b1",
    storageBucket: "journal-app-react-a98b1.appspot.com",
    messagingSenderId: "592612483357",
    appId: "1:592612483357:web:dfc447c7a9179f173d01f4"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // autenticación con google

export {
    db,
    googleAuthProvider,
    firebase,
}