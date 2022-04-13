// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN6hU3ymu2qC4ThhBdaG6FSgw1VvatNlY",
    authDomain: "genius-car-services-5104c.firebaseapp.com",
    projectId: "genius-car-services-5104c",
    storageBucket: "genius-car-services-5104c.appspot.com",
    messagingSenderId: "975609524700",
    appId: "1:975609524700:web:21ca7b9116ef13cd2c5f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;