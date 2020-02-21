import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwLQZSfVXXvjbctxqGELBZ1NFa2_ZWh0M",
    authDomain: "crwn-db-ebfac.firebaseapp.com",
    databaseURL: "https://crwn-db-ebfac.firebaseio.com",
    projectId: "crwn-db-ebfac",
    storageBucket: "crwn-db-ebfac.appspot.com",
    messagingSenderId: "845012164056",
    appId: "1:845012164056:web:a7a10830c196b1bd8726ad",
    measurementId: "G-G3KJNKV221"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;