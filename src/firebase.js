import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBPcA17D5PyJP6WKpG-ZB72ufKOavn8Ixk',
  authDomain: 'my-mail-223a0.firebaseapp.com',
  projectId: 'my-mail-223a0',
  storageBucket: 'my-mail-223a0.appspot.com',
  messagingSenderId: '457830444545',
  appId: '1:457830444545:web:7d6cfcc2631b6589acda00',
  measurementId: 'G-2WP84N6Q2J',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
