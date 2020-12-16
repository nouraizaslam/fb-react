import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9W24WJ5izDCqZVwRSx8eBPjC0f8vaZa0",
    authDomain: "myfacebook-n.firebaseapp.com",
    projectId: "myfacebook-n",
    storageBucket: "myfacebook-n.appspot.com",
    messagingSenderId: "333952610739",
    appId: "1:333952610739:web:6f0b6b188a7e61c88f1bc6",
    measurementId: "G-WQ5T1YDBZH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;