import { LogIn } from "lucide-react";
import { login } from "../actions/authActions";

export const LoginButton = () => {
  return (
    <form action={login} className="flex justify-center w-full">
      <button className="flex flex-row gap-2 items-center justify-center text-[#BF5048] border p-1.5 transition delay-150 ease-in-out hover:bg-[#DFC6C0] font-semibold">
        <LogIn />
        <span>LOG IN</span>
      </button>
    </form>
  );
};
