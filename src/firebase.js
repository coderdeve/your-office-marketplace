import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMmgYArLySghpJDfknGE4q0DI_-20PWJE",
    authDomain: "your-office-project.firebaseapp.com",
    projectId: "your-office-project",
    storageBucket: "your-office-project.appspot.com",
    messagingSenderId: "948045103656",
    appId: "1:948045103656:web:44406ccc82048abdbe6b1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;