import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYuBMXqX6v4I78OREF7JDzCL-254HEMEU",
  authDomain: "fir-cc22a.firebaseapp.com",
  databaseURL: "https://fir-cc22a-default-rtdb.firebaseio.com",
  projectId: "fir-cc22a",
  storageBucket: "fir-cc22a.appspot.com",
  messagingSenderId: "390677119580",
  appId: "1:390677119580:web:5bd42ff73dc325a91adc99",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };