import {initializeApp} from '@react-native-firebase/app';
import {getFirestore} from '@react-native-firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyASAdGbmIqxDBmlQTgDUJa_L1u69nSWlfg",
    authDomain: "todolist-2dd8d.firebaseapp.com",
    projectId: "todolist-2dd8d",
    storageBucket: "todolist-2dd8d.firebasestorage.app",
    messagingSenderId: "711075864165",
    appId: "1:711075864165:web:53be30d0d4dacec6b7f08c",
    measurementId: "G-L23Y72WDTQ"
  };
  
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)