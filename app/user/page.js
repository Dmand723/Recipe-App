"use client";

import Card from "@/components/card";
import { useContext, useState } from "react";
import Link from "next/link";
import { recipeContex } from "@/lib/api-handler/recipeHandler";
import { authContext } from "@/lib/api-handler/auth-contex";
import EditModal from "@/components/EditModal";
import { redirect } from "next/navigation";

export default function UserHome() {
  const [editShow, setEditShow] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const { savedRecipes, removeFavRecipe, userRecipes } =
    useContext(recipeContex);
  const { user } = useContext(authContext);

  const onRemoveHandler = (toRemove) => {
    removeFavRecipe(toRemove, user.uid);
  };
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col">
      {editShow && (
        <EditModal show={editShow} onClose={setEditShow} data={recipeToEdit} />
      )}

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
      <Link href="/user/newRecipe" className="btn btn-add self-center my-5">
        Add New Recipe
      </Link>
      <div className="flex flex-wrap">
        {userRecipes.map((recipe) => {
          return (
            <Card key={recipe.id} recipe={recipe} page="user">
              <button
                onClick={() => {
                  setRecipeToEdit(recipe);
                  setEditShow(true);
                }}
                className="btn btn-edit"
              >
                Edit
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
