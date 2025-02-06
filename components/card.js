import Link from "next/link";

export default function Card({ recipe }) {
  const dummyData = [
    {
      id: 1,
      title: "Eggs and ham",
      desc: "A Delicios Eggs and ham recipe",
      link: "/blog",
    },
  ];
  return (
    <Link href={recipe.link}>
      <div className="flex my-5 mx-5 bg-slate-600 rounded-lg shadow-lg overflow-hidden w-64 h-64 flex-col">
        <div className="p-5 m-auto flex items-center justify-around h-full flex-col text-center">
          <h1 className="text-white text-xl font-bold">{recipe.title}</h1>
          <p>{recipe.desc}</p>
        </div>
      </div>
    </Link>
  );
}
