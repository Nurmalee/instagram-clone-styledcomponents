
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPiwsksOqh491cs7P3qUKGwW-Ip6ubUFY",
    authDomain: "instagram-clone-styledcomps.firebaseapp.com",
    projectId: "instagram-clone-styledcomps",
    storageBucket: "instagram-clone-styledcomps.appspot.com",
    messagingSenderId: "53951144642",
    appId: "1:53951144642:web:884b514d65ae0afc7a915b"
};

firebase.initializeApp(firebaseConfig);
const instagramCloneDb = firebase.firestore();
const instagramCloneStorage = firebase.storage();
const instagramCloneAuth = firebase.auth();
const firebaseServerTime = firebase.firestore.FieldValue.serverTimestamp();

export { instagramCloneDb, instagramCloneStorage, instagramCloneAuth, firebaseServerTime }