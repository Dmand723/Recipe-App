import Link from "next/link";

export default function Card({ recipe, children }) {
  const dummyData = [
    {
      id: 1,
      title: "Eggs and ham",
      desc: "A Delicios Eggs and ham recipe",
      link: "/blog",
    },
  ];
  return (
    <div className=" flex flex-col my-5 mx-5 justify-center items-start">
      <Link
        href={recipe.link}
        target="_blank"
        className="flex  bg-slate-600 rounded-lg shadow-lg  w-80 h-80 flex-col"
      >
        <div className="p-5 m-auto flex items-center justify-around h-full flex-col text-center">
          <h1 className="text-white text-xl font-bold">{recipe.title}</h1>
          <p>{recipe.desc}</p>
        </div>
        <small className="self-end mx-3 my-1 text-gray-400">
          Click to Veiw Recipe
        </small>
      </Link>
      {children}
    </div>
  );
}
