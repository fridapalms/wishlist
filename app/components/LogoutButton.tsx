"use client";
import { LogOut } from "lucide-react";
import { logout } from "../actions/authActions";

export const LogoutButton = () => {
  return (
    <button onClick={() => logout()} className="flex flex-row gap-2 items-center justify-center text-[#BF5048] border p-1.5 transition delay-150 ease-in-out hover:bg-[#DFC6C0] font-semibold">
      <LogOut />
      <span className="hidden lg:block">LOG OUT</span>
    </button>
  );
};
