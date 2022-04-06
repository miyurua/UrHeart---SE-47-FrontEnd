// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUqENlRwapVeZKzUcKmvgH2VTbMND3BY",
  authDomain: "urheart-auth.firebaseapp.com",
  projectId: "urheart-auth",
  storageBucket: "urheart-auth.appspot.com",
  messagingSenderId: "725206045071",
  appId: "1:725206045071:web:c82708e5104920ef7f7bfa"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

const store = firebase.firestore();

export {auth, store};
//const app = initializeApp(firebaseConfig);