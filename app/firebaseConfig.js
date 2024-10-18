import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCtRIvca3RdWr_REIoyfvdy1SRLfV3TNIs",
    authDomain: "appmanga-74537.firebaseapp.com",
    projectId: "appmanga-74537",
    storageBucket: "appmanga-74537.appspot.com",
    messagingSenderId: "424227377804",
    appId: "1:424227377804:web:34d12c1c7477e99e72a1a9"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // auth
// Inicializa o Firestore
const db = getFirestore(app);

export { auth , db };