// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDDCCqas6UrTBlr2afb74sHchnfdCAw9PQ',
  authDomain: 'gunsul-77884.firebaseapp.com',
  projectId: 'gunsul-77884',
  storageBucket: 'gunsul-77884.appspot.com',
  messagingSenderId: '68312113616',
  appId: '1:68312113616:web:4d11f69477fed8875d99d5',
  measurementId: 'G-98FRC6QL8P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export default db;
