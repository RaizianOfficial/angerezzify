
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqYFarISxMvY9Vq0Kgjxs21Vy4fj0_CVg",
  authDomain: "angrezzify.firebaseapp.com",
  projectId: "angrezzify",
  storageBucket: "angrezzify.firebasestorage.app",
  messagingSenderId: "1040258063224",
  appId: "1:1040258063224:web:6f546a2d45a88abc2a468d",
  measurementId: "G-1YS7R2YJ2R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
