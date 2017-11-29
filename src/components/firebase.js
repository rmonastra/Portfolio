
import firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAwSNFIbZ4EH7Oe8S4Vp8vqexMaE9bs9Y",
    authDomain: "portfolio-richmonastra.firebaseapp.com",
    databaseURL: "https://portfolio-richmonastra.firebaseio.com",
    projectId: "portfolio-richmonastra",
    storageBucket: "",
    messagingSenderId: "875333602379"
  };
  firebase.initializeApp(config);

  export default firebase;