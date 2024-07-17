import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB04ONDJ60R7umWhwEcwOlNlwiptF7RoRY",
  authDomain: "aslingo-f6de2.firebaseapp.com",
  databaseURL: "https://aslingo-f6de2-default-rtdb.firebaseio.com",
  projectId: "aslingo-f6de2",
  storageBucket: "aslingo-f6de2.appspot.com",
  messagingSenderId: "191932630543",
  appId: "1:191932630543:web:5762f265dd84e2748a457a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
