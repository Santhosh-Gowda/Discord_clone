import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZNrgdhWSETgDBDUf2KuPLoq-wK6WMJk",
  authDomain: "discord-clone-957a6.firebaseapp.com",
  databaseURL: "https://discord-clone-957a6.firebaseio.com",
  projectId: "discord-clone-957a6",
  storageBucket: "discord-clone-957a6.appspot.com",
  messagingSenderId: "786059105718",
  appId: "1:786059105718:web:58241180a52330ea995d17",
  measurementId: "G-RWH37YHHF6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
