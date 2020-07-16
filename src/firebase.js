import firebase from "firebase";
const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBHyivf4TkzTUWfq8hm0y8fxSYzBoEMo1U",
    authDomain: "facebook-messanger-clone-51e6c.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-51e6c.firebaseio.com",
    projectId: "facebook-messanger-clone-51e6c",
    storageBucket: "facebook-messanger-clone-51e6c.appspot.com",
    messagingSenderId: "1035293954268",
    appId: "1:1035293954268:web:dd565114bca5171d90a419",
    measurementId: "G-40DR9GKPRG"
});

const db = firebaseapp.firestore();

export default db;