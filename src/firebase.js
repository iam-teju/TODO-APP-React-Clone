import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCUxNzXLPfsrYSnbRAekP9EEjHyUTY12fk",
  authDomain: "todo-app-7bbd2.firebaseapp.com",
  projectId: "todo-app-7bbd2",
  storageBucket: "todo-app-7bbd2.appspot.com",
  messagingSenderId: "328964467616",
  appId: "1:328964467616:web:ad671e66307fb767b912c5",
  measurementId: "G-6QF7RLRM9K",
});

const db = firebaseApp.firestore();

export default db;
