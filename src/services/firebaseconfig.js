import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAnmUQLUqpFdHQDRf_RhQhw5ZZG1t5hL8Q",
   authDomain: "fir-todo-91356.firebaseapp.com",
   projectId: "fir-todo-91356",
   storageBucket: "fir-todo-91356.appspot.com",
   messagingSenderId: "588590575517",
   appId: "1:588590575517:web:e54d32dd03bb4dd6238974",
   measurementId: "G-H7W8MCHVQQ"
}

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);