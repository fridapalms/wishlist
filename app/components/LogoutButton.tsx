import { LogOut } from "lucide-react";
import { logout } from "../actions/authActions";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <button className="flex flex-row gap-2 items-center justify-center text-[var(--color-green)] p-2 xl:pr-4 cursor-pointer transition delay-150 ease-in-out bg-[var(--color-lightblue)] rounded hover:bg-[var(--color-blue)] font-semibold">
        <LogOut />
        <span className="hidden xl:block">LOG OUT</span>
      </button>
    </form>
  );
};
