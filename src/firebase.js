import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSbkOuoSUhQpKp_-Zh02UKfHMocI10CdE",
  authDomain: "fir-tutorial-ae30a.firebaseapp.com",
  databaseURL: "https://fir-tutorial-ae30a.firebaseio.com",
  projectId: "fir-tutorial-ae30a",
  storageBucket: "fir-tutorial-ae30a.appspot.com",
  messagingSenderId: "209721389739",
  appId: "1:209721389739:web:c1941580e6d46d63dafdee",
  measurementId: "G-76855EEF96"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
