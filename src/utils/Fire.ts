import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREAPIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGESENDING_ID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase

const fireDB = firebase.initializeApp(firebaseConfig);
const db = fireDB.firestore();

export default db;
