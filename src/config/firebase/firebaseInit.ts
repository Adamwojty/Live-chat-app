import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "livechat-6a4e3.firebaseapp.com",
  databaseURL: "https://livechat-6a4e3.firebaseio.com",
  projectId: "livechat-6a4e3",
  storageBucket: "livechat-6a4e3.appspot.com",
  messagingSenderId: "354821401602",
  appId: "1:354821401602:web:2e73877b210131b0698b1b",
};
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export const auth = fb.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
