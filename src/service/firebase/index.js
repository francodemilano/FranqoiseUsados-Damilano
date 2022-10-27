import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvuHK6APexbwNF4Ag4a_--igIy-WUbX08",
  authDomain: "franqoiseusados.firebaseapp.com",
  projectId: "franqoiseusados",
  storageBucket: "franqoiseusados.appspot.com",
  messagingSenderId: "96017394773",
  appId: "1:96017394773:web:25e5d46d36ee21dc5678dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)