import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfI9rMqYrtdRPsnDRIt1xqXMVfvRLB3rw",
  authDomain: "kiraj-orangehrm.firebaseapp.com",
  projectId: "kiraj-orangehrm",
  storageBucket: "kiraj-orangehrm.appspot.com",
  messagingSenderId: "191284529595",
  appId: "1:191284529595:web:f9f81138c3b0ac20fe1c9e",
  measurementId: "G-D7532BXD5T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
