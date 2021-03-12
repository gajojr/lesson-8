import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCW-sfzPJ5jCjoYdX6iiv1HdBWtLmLtlCw",
    authDomain: "crwn-db-2f248.firebaseapp.com",
    projectId: "crwn-db-2f248",
    storageBucket: "crwn-db-2f248.appspot.com",
    messagingSenderId: "446318648010",
    appId: "1:446318648010:web:c03bba67cc93e62025f233",
    measurementId: "G-LN3R9NZXE9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;