import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBefLcr-Og6kXEctosdQ9lMrz9BzgQSX8I",
    authDomain: "react-app-84fc9.firebaseapp.com",
    projectId: "react-app-84fc9",
    storageBucket: "react-app-84fc9.appspot.com",
    messagingSenderId: "11225907878",
    appId: "1:11225907878:web:58c94c0ac987c9ff692a67"
};

// Inicializo la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}