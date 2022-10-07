// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsRx-og_BUmQPwonOBIxbkv6jGbs2OmXo',
  authDomain: 'challange-3e8c2.firebaseapp.com',
  projectId: 'challange-3e8c2',
  storageBucket: 'challange-3e8c2.appspot.com',
  messagingSenderId: '61751595883',
  appId: '1:61751595883:web:3ea91b62cb3aadcd2bb22e',
  measurementId: 'G-7JNRFMPFW1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
