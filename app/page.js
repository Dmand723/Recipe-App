"use client";

import Card from "@/components/card";
import { useContext } from "react";
import { recipeContex } from "@/lib/api-handler/recipeHandler";

export default function Home() {
  const { publicRecipes } = useContext(recipeContex);

  return (
    <div className="flex flex-wrap">
      {publicRecipes.map((recipe) => {
        return <Card key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
}
