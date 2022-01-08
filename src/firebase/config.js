// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default { projectStorage, projectFirestore};
