import dayjs from "dayjs";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { SyntheticEvent } from "react";
import { rethrow } from "../helpers/rethrow";
import { AdditionalCreateUserData } from "./firebaseInterfaces";

export const createUserDocument = async (
  userAuth: firebase.User,
  additionalData: AdditionalCreateUserData
): Promise<firebase.firestore.DocumentReference> => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;

    await userRef.set({
      displayName,
      email,
      creationDate: dayjs().toISOString(),
      ...additionalData,
    });
  }

  return userRef;
};

firebase.initializeApp({
  apiKey: "AIzaSyACkuYxJxJ4EUu3fCkAITexymGNRXPuOJ0",
  authDomain: "clothing-shop-9f739.firebaseapp.com",
  projectId: "clothing-shop-9f739",
  storageBucket: "clothing-shop-9f739.appspot.com",
  messagingSenderId: "1025641404349",
  appId: "1:1025641404349:web:7308982f22fd41e39164d4",
  measurementId: "G-3TR0ZY4HQD",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = (event: SyntheticEvent): void => {
  event.preventDefault();
  auth.signInWithPopup(provider).catch(rethrow);
};

export default firebase;
