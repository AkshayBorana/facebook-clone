// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBse2sUjN8t3YQ2balPPrW95YToAcUCTo4",
  authDomain: "facebook-clone-b319b.firebaseapp.com",
  databaseURL: "https://facebook-clone-b319b.firebaseio.com",
  projectId: "facebook-clone-b319b",
  storageBucket: "facebook-clone-b319b.appspot.com",
  messagingSenderId: "790579298663",
  appId: "1:790579298663:web:dfc2abce65ef32842befc2",
  measurementId: "G-96B0PP4H6W"
};


// Connecting React Front End to Firebase backend..
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Access to the db..
const db = firebaseApp.firestore();
// Auth will allow us to login/signin..
const auth = firebase.auth();
// Tells firebase we want google llgin service...
const provider =  new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

