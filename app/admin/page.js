"use client";

import { useContext, useState } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";
import { recipeContex } from "@/lib/api-handler/recipeHandler";

export default function Admin() {
  const { checkAdmin, user, loading } = useContext(authContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const { addPublicRecipe } = useContext(recipeContex);
  const adminCheck = async () => {
    const check = await checkAdmin();

    setIsAdmin(check);
  };
  if (!loading) {
    adminCheck();
    if (!isAdmin) {
      return (
        <div className="bg-black  min-h-screen flex items-center justify-center ">
          {/* <h1 className="text-white font-bold text-9xl">Unauthorized</h1> */}
          <img src="/no.png" className="h-[600px] w-[950px]" alt="LOL" />
        </div>
      );
    }
  }
  const addRecipeHandler = (data) => {
    const newRecipe = {
      createdBy: user.displayName,
      ...data,
    };
    addPublicRecipe(newRecipe);
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      {!loading ? (
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="admin-headers">Tools</h1>
          <form
            className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                title: e.target.title.value,
                desc: e.target.desc.value,
                link: e.target.link.value,
              };
              addRecipeHandler(formData);
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Add Recipe</h2>
            <input
              className="inputs"
              type="text"
              name="title"
              placeholder="Title"
            />
            <input
              className="inputs"
              type="text"
              name="desc"
              placeholder="Description"
            />
            <input
              className=" inputs"
              type="text"
              name="link"
              placeholder="Link"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
          <h1 className="admin-headers">Public Recipes</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
