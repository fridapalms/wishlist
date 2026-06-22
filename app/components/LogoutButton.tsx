import { LogOut } from "lucide-react";
import { logout } from "../actions/authActions";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <button className="flex flex-row gap-2 items-center justify-center text-[var(--color-darkred)] p-2 transition delay-150 ease-in-out bg-[var(--color-blue)] hover:bg-[var(--color-red)] font-semibold">
        <LogOut />
        <span className="hidden lg:block">LOG OUT</span>
      </button>
    </form>
  );
};
