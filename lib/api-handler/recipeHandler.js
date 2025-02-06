"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";

// Firebase
import { db } from "@/lib/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

export const recipeContex = createContext({
  publicRecipes: [],
});

export default function RecipeContexProvider({ children }) {
  const [publicRecipes, setPublicRecipes] = useState([]);

  const { user } = useContext(authContext);

  const values = {
    publicRecipes,
  };

  useEffect(() => {
    const getPublicRecipes = async () => {
      const collectionRef = collection(db, "publicRecipes");
      const docSnap = await getDocs(collectionRef);
      const data = docSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPublicRecipes(data);
    };
    getPublicRecipes();
  }, []);

  return (
    <recipeContex.Provider value={values}>{children}</recipeContex.Provider>
  );
}
