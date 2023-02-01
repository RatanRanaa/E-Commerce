import { initializeApp } from 'firebase/app'
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9HqRKn3AajI8DnKpoa3g5_JXrg3JX48o",
    authDomain: "react-authentication-911ce.firebaseapp.com",
    projectId: "react-authentication-911ce",
    storageBucket: "react-authentication-911ce.appspot.com",
    messagingSenderId: "719917415841",
    appId: "1:719917415841:web:b780c9ecca3735c0571fe0",
    measurementId: "G-H4WZJJEH0B"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {auth, provider}