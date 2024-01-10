// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBy3bhgF-03tDxeXXB-4foXbiBRAH1FG2o",
  authDomain: "gym-app-24334.firebaseapp.com",
  projectId: "gym-app-24334",
  storageBucket: "gym-app-24334.appspot.com",
  messagingSenderId: "114637582926",
  appId: "1:114637582926:web:a299f335b1bcba3ea9091f",
  measurementId: "G-ENFV8GL8MM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;