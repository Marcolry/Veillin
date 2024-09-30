import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuT0htQFAKEpEl-jV4lfnEJGNEgktIBQQ",
  authDomain: "veillin-czrta5.firebaseapp.com",
  projectId: "veillin-czrta5",
  storageBucket: "veillin-czrta5.appspot.com",
  messagingSenderId: "868993549186",
  appId: "1:868993549186:web:55d0a43c40a55708cb459b",
  measurementId: "G-82RZXFCXER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtenir les instances de Firestore et Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, analytics };