
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpofhTMY5f3VjTGKhbPeWawEAc7Ub_Wls",
  authDomain: "user-authentication-a0aa6.firebaseapp.com",
  projectId: "user-authentication-a0aa6",
  storageBucket: "user-authentication-a0aa6.appspot.com",
  messagingSenderId: "1006848920771",
  appId: "1:1006848920771:web:de3eac7c9a9a9841d7a676",
  measurementId: "G-S83BDBEESD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)