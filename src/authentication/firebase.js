// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNv7XPGxIiwwSn-8znsCFEAeHXTrMuqns",
  authDomain: "miniproject-mmovies.firebaseapp.com",
  projectId: "miniproject-mmovies",
  storageBucket: "miniproject-mmovies.appspot.com",
  messagingSenderId: "45070803670",
  appId: "1:45070803670:web:1be58ed6fe191eab1bdf77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregis dan berhasil login adalah",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth: ", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userYangLogin.user);
  } catch (err) {
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth: ", err.message);
  }
};

const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  keluarDariAplikasi,
};
