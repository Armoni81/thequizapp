import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCxd1Iq49P7QCc_5rXCN3Y-RFC5qLug3oY",
  authDomain: "auth--quizapp.firebaseapp.com",
  projectId: "auth--quizapp",
  storageBucket: "auth--quizapp.appspot.com",
  messagingSenderId: "1075536344102",
  appId: "1:1075536344102:web:a28b60e6a2c3698dc7a2e7",
  measurementId: "G-21MWTNDZYF"
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);