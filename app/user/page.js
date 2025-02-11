"use client";

import Card from "@/components/card";
import { useContext } from "react";
import Link from "next/link";
import { recipeContex } from "@/lib/api-handler/recipeHandler";
import { authContext } from "@/lib/api-handler/auth-contex";

export default function UserHome() {
  const { savedRecipes, removeFavRecipe } = useContext(recipeContex);
  const { user } = useContext(authContext);

  const onRemoveHandler = (toRemove) => {
    removeFavRecipe(toRemove, user.uid);
  };

  return (
    <div className="flex flex-col">
      <Link href="/user/newRecipe" className="btn btn-add self-center my-5">
        Add New Recipe
      </Link>
      <h1 className="headers">Saved Recipes</h1>
      <div className="flex flex-wrap">
        {savedRecipes.map((recipe) => {
          return (
            <Card key={recipe.id} recipe={recipe} page="user">
              <button
                onClick={() => {
                  onRemoveHandler(recipe);
                }}
                className="btn btn-danger"
              >
                Remove
              </button>
            </Card>
          );
        })}
      </div>
      <h1 className="headers">Your Recipes</h1>
    </div>
  );
}
