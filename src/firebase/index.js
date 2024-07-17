import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// apiKey: "AIzaSyB04ONDJ60R7umWhwEcwOlNlwiptF7RoRY",
// authDomain: "aslingo-f6de2.firebaseapp.com",
// databaseURL: "https://aslingo-f6de2-default-rtdb.firebaseio.com",
// projectId: "aslingo-f6de2",
// storageBucket: "aslingo-f6de2.appspot.com",
// messagingSenderId: "191932630543",
// appId: "1:191932630543:web:5762f265dd84e2748a457a",
