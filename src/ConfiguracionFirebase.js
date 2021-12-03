//import firebase from "firebase/app";

import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7VTgXHp_SjPj-uJ25WdOXDQXaTQlBHmQ",
  authDomain: "agenda-joimer.firebaseapp.com",
  projectId: "agenda-joimer",
  storageBucket: "agenda-joimer.appspot.com",
  messagingSenderId: "823887365834",
  appId: "1:823887365834:web:916a52751acba87b885633"
};

firebase.initializeApp(firebaseConfig);

export const BaseDatos = firebase.firestore();
export default firebase;