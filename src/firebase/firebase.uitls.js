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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;