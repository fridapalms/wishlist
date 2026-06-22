import { auth } from "@/auth";
import { AllWishes } from "./AllWishes";

export const WelcomeMessage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-[#BF5048]">Welcome, {session?.user?.name}!</h1>
        <p>Use the sidebar to navigate between wishlists, categories and adding your new wishes.</p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-[#BF5048] font-semibold text-2xl">All your wishes</h3>
        <AllWishes />
      </div>
    </div>
  );
};
