import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore,onSnapshot, doc, setDoc, getDoc, addDoc, getDocs, query,where, collection } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCP8GMn05J7Mwqb8B2jov8Au1Kn0m7ig5c",
    authDomain: "testing-e2357.firebaseapp.com",
    databaseURL: "https://testing-e2357-default-rtdb.firebaseio.com",
    projectId: "testing-e2357",
    storageBucket: "testing-e2357.appspot.com",
    messagingSenderId: "129527981829",
    appId: "1:129527981829:web:82c55e5edd64006c8fb96c",
    measurementId: "G-614EFEFMN6"
  });

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    collection,
    doc,
    setDoc,
    getDoc,
    addDoc,
    getDocs,
    query,
    where,
    onSnapshot
};