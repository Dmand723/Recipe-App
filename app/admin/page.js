"use client";

import { useContext, useState } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";

export default function Admin() {
  const { checkAdmin, logout } = useContext(authContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminCheck = async () => {
    const check = await checkAdmin();

    setIsAdmin(check);
  };
  adminCheck();
  if (!isAdmin) {
    return (
      <div className="bg-black  min-h-screen flex items-center justify-center ">
        {/* <h1 className="text-white font-bold text-9xl">Unauthorized</h1> */}
        <img src="/no.png" className="h-[600px] w-[950px]" alt="LOL" />
      </div>
    );
  }
  return (
    <div>
      <h1>Hello Admin</h1>
    </div>
  );
}
