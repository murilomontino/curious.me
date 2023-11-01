import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const ENV = (import.meta as any).env;

const firebaseConfig = {
  apiKey: ENV.REACT_APP_API_KEY,
  authDomain: ENV.REACT_APP_AUTH_DOMAIN,
  databaseURL: ENV.REACT_APP_DATABASE_URL,
  projectId: ENV.REACT_APP_PROJECT_ID,
  storageBucket: ENV.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: ENV.REACT_APP_MESSAGING_SENDER_ID,
  appId: ENV.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
