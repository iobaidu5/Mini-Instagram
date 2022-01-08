// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpBcchLmUurohLQ3KvEammIrfutb-huuw",
  authDomain: "mini-instagram-35118.firebaseapp.com",
  projectId: "mini-instagram-35118",
  storageBucket: "mini-instagram-35118.appspot.com",
  messagingSenderId: "1096602380423",
  appId: "1:1096602380423:web:62670f488031176cea7022"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
