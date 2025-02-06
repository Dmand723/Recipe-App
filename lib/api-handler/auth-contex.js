"use client";

import { createContext } from "react";
import { auth } from "@/lib/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
  checkAdmin: async () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider(auth);

  const googleLoginHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    signOut(auth);
  };
  const checkAdmin = async () => {
    if (!user) {
      return false;
    }
    console.log(user.uid);
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("uid", "==", user.uid));

    const docsSnap = await getDocs(q);

    const data = docsSnap.docs[0].data();
    console.log(data);

    return data.roll == "admin";
  };

  return (
    <authContext.Provider
      value={{ user, loading, googleLoginHandler, logout, checkAdmin }}
    >
      {children}
    </authContext.Provider>
  );
}
