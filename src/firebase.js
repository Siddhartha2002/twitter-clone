import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE-f-ZDrZtGgv7ys6gIoKT7P0Ujmml88M",
  authDomain: "twitter-clone-9f4bf.firebaseapp.com",
  projectId: "twitter-clone-9f4bf",
  storageBucket: "twitter-clone-9f4bf.appspot.com",
  messagingSenderId: "423961605087",
  appId: "1:423961605087:web:4e6f8cb9d70bba5f4cca6a",
  measurementId: "G-1ELE5CCE8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
