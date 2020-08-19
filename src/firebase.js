// This is how we connect our site to firebase
import firebase from "firebase";

// We got this from the firebase console, however we are not using it
// at the moment
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYZR2Rrw0mrl7NF59wiNFwK3AFMMzkk0w",
  authDomain: "clone-a8ee3.firebaseapp.com",
  databaseURL: "https://clone-a8ee3.firebaseio.com",
  projectId: "clone-a8ee3",
  storageBucket: "clone-a8ee3.appspot.com",
  messagingSenderId: "173603231290",
  appId: "1:173603231290:web:51821da52ca7d661928703",
  measurementId: "G-07KX7NW66R",
});

const auth = firebase.auth();

// Anything that we have to use outside of this file, we export it
export { auth };
