// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from "firebase/compat/app";
// eslint-disable-next-line import/no-extraneous-dependencies
import "firebase/compat/auth";
// eslint-disable-next-line import/no-extraneous-dependencies
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyACkuYxJxJ4EUu3fCkAITexymGNRXPuOJ0",
  authDomain: "clothing-shop-9f739.firebaseapp.com",
  projectId: "clothing-shop-9f739",
  storageBucket: "clothing-shop-9f739.appspot.com",
  messagingSenderId: "1025641404349",
  appId: "1:1025641404349:web:7308982f22fd41e39164d4",
  measurementId: "G-3TR0ZY4HQD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> =>
  auth.signInWithPopup(provider);

export default firebase;
