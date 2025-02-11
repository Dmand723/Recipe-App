import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

import { useContext } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";

export default function Card({ recipe, children, page = "user" }) {
  const { user } = useContext(authContext);
  const checkUserSavedRecipes = () => {};
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col my-5 mx-5 justify-center items-start bg-slate-600 rounded-lg shadow-lg">
        {page == "user" && user ? (
          <FaRegStar className="mt-2 ml-2 size-[30px]" />
        ) : (
          page == "user" &&
          !user && <small className="mt-2 ml-2">Please login in to save</small>
        )}
        <Link
          href={recipe.link}
          target="_blank"
          className="flex   w-80 h-80 flex-col"
        >
          <div className="p-5 m-auto flex items-center justify-around h-full flex-col text-center">
            <h1 className="text-white text-xl font-bold">{recipe.title}</h1>
            <p>{recipe.desc}</p>
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
