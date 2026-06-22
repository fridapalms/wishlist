import { auth } from "@/auth";
import { AllFavorites } from "./AllFavorites";
import Image from "next/image";
import { AddFavorite } from "./AddFavorite";

export const WelcomeMessage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-10 p-6 w-full">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold text-black">Welcome, {session?.user?.name}!</h1>
        <p>Use the sidebar to navigate between wishlists, categories and adding your new wishes.</p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-black font-semibold text-2xl">Our monthly favorites</h3>
        <Image alt="monthly favorites" src="/july.png" width={1920} height={1080} className="w-full max-w-[1920px] aspect-[16/9] object-cover"></Image>
        <AllFavorites />
      </div>
    </div>
  );
};
