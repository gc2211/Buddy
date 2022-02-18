import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDnYMhgUW81aPAp-8pJoMLQoaYr3KCyOas",
    authDomain: "buddy-c6dd0.firebaseapp.com",
    projectId: "buddy-c6dd0",
    storageBucket: "buddy-c6dd0.appspot.com",
    messagingSenderId: "835163143660",
    appId: "1:835163143660:web:7632df0e417a491c9cd4c9",
    measurementId: "G-ZSCKWJQHF3"
  };

  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);