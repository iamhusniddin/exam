import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs4BHkkEAnG0xkUheImdaBMdXN5RcECJA",
  authDomain: "second-p-4e0d3.firebaseapp.com",
  projectId: "second-p-4e0d3",
  storageBucket: "second-p-4e0d3.appspot.com",
  messagingSenderId: "268960461608",
  appId: "1:268960461608:web:032050161291da048a161d",
  measurementId: "G-8M530W576X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };



