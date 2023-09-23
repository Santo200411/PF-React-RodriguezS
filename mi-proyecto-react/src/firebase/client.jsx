import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBHEXzBH6Gt3df24dN8wZTC_DXr2ZmsEJY",
  authDomain: "ecommerce-26972.firebaseapp.com",
  projectId: "ecommerce-26972",
  storageBucket: "ecommerce-26972.appspot.com",
  messagingSenderId: "839193067169",
  appId: "1:839193067169:web:f17875c1d21d4d3bd43ae0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)