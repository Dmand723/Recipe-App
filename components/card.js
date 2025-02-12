"use client";

import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";

import { useContext, useState } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";
import { recipeContex } from "@/lib/api-handler/recipeHandler";
import { toast } from "react-toastify";

export default function Card({ recipe, children, page = "home" }) {
  const { user } = useContext(authContext);
  const { addFavRecipe } = useContext(recipeContex);

  const onSaveHandler = (r) => {
    const data = {
      ...r,
    };
    addFavRecipe(user.uid, data);
    toast.success(`Recipe ${r.title} saved successfully`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col my-5 mx-5 justify-center items-start bg-slate-600 rounded-lg shadow-lg p-3">
        {page == "home" && user ? (
          <FaRegStar
            onClick={() => {
              onSaveHandler(recipe);
            }}
            className="mt-2 ml-2 size-[30px] caret-rose-700 cursor-love"
          />
        ) : (
          page == "home" &&
          !user && <small className="mt-2 ml-2">Please login in to save</small>
        )}
        {page == "user-usersRecipes" && (
          <div>
            {recipe.isPrivate ? (
              <small className="bg-red-400 p-2 m-1 rounded-3xl">Private</small>
            ) : (
              <small className="bg-green-400 p-2 m-1 rounded-3xl">Public</small>
            )}
          </div>
        )}
        <Link
          href={recipe.link}
          target="_blank"
          className="flex   w-80 h-80 flex-col"
        >
          <div className="p-5 m-auto flex items-center justify-around h-full flex-col text-center max-w-[320px]">
            <h1 className="text-white text-xl font-bold line-clamp-3 break-words max-w-[320px] p-5">
              {recipe.title}
            </h1>
            <p className="max-w-[320px] break-words line-clamp-3 ">
              {recipe.desc}
            </p>
          </div>
          <small className="self-end mx-3 my-1 text-gray-400">
            Click to Veiw Recipe
          </small>
        </Link>
      </div>
      {children}
    </div>
  );
}
