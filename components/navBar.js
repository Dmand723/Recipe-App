"use client";

import { useContext } from "react";
import { authContext } from "@/lib/api-handler/auth-contex";

import Link from "next/link";

export default function NavBar() {
  const { user, logout } = useContext(authContext);
  return (
    <div className="flex justify-end bg-emerald-900">
      <h1>Recipe App</h1>
      {!user ? (
        <button className="btn btn-primary-outline">
          <Link href="/login">Login</Link>
        </button>
      ) : (
        <button onClick={logout} className="btn btn-danger ">
          Logout
        </button>
      )}
    </div>
  );
}
