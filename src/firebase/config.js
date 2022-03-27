import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC9ujmo_80PdU2WucroIb6XOTYBAuq80yk",
  authDomain: "hiendt-savepic.firebaseapp.com",
  databaseURL:
    "https://hiendt-savepic-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hiendt-savepic",
  storageBucket: "hiendt-savepic.appspot.com",
  messagingSenderId: "1053858785727",
  appId: "1:1053858785727:web:2ffdc52c4497413efb990a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
