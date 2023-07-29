import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

export const firebaseConfig = {
   apiKey: "AIzaSyDd1AbTTffO6MQFGm49bmEfw-j8UX5LPJM",
  authDomain: "attendance-c5a47.firebaseapp.com",
  projectId: "attendance-c5a47",
  storageBucket: "attendance-c5a47.appspot.com",
  messagingSenderId: "4342999055",
  appId: "1:4342999055:web:ef7152d30ceb4d20359b7a",
  measurementId: "G-WECXEHSGFD"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)

export default app
