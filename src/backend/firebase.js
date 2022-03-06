import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXPJsFhrqjjoApEC8lNyUGEHJZvq-BGF4",
  authDomain: "linkedin-clone-2d18b.firebaseapp.com",
  projectId: "linkedin-clone-2d18b",
  storageBucket: "linkedin-clone-2d18b.appspot.com",
  messagingSenderId: "147542874856",
  appId: "1:147542874856:web:637cd9a1774bf3e690075d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();

const auth = firebase.auth();

export { db, auth };