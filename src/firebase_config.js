// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRbjO8iPyL0wnPg8k99Hbmj2__Eo4-Hjk',
  authDomain: 'lec-21-668ad.firebaseapp.com',
  projectId: 'lec-21-668ad',
  storageBucket: 'lec-21-668ad.firebasestorage.app',
  messagingSenderId: '313485575523',
  appId: '1:313485575523:web:af9558964e3ac71cc83f56',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { firebaseApp, db }
