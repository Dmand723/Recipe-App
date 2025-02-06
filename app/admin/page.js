"use client";

import { useContext, useState } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";

export default function Admin(res) {
  const { checkAdmin } = useContext(authContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminCheck = async () => {
    const check = await checkAdmin();

    setIsAdmin(check);
  };
  adminCheck();
  if (!isAdmin) {
    return (
      <div className="bg-black  min-h-screen flex items-center justify-center ">
        <h1 className="text-white">Unauthorized</h1>
      </div>
    );
  }
  return <h1>Hello Admin</h1>;
}
