import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDHWqOthl3KuH30j1Czz2Pk3WPbytuiKt0",
  authDomain: "clothing-db-2f28b.firebaseapp.com",
  projectId: "clothing-db-2f28b",
  storageBucket: "clothing-db-2f28b.appspot.com",
  messagingSenderId: "485089661710",
  appId: "1:485089661710:web:4100be842d26d3bcf7bd5f",
  measurementId: "G-RRC3Y82CYR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Corrected function name
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
