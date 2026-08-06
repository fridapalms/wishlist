import { auth } from "@/auth";
import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";
import { AllFavorites } from "./AllFavorites";

export const WelcomeMessage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-16 w-full">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex flex-col text-start gap-10 items-start justify-center md:p-16 p-8 bg-[var(--color-lightyellow)] lg:w-1/2 w-full min-h-[500px] lg:rounded-l-xl rounded-t-xl">
          <h1 className="text-4xl text-start font-semibold text-[var(--color-green)]">
            Collect what makes you <span className="bg-[var(--color-lightpink)] p-0.5">happy</span>
          </h1>
          <p className="text-lg">Organize your wishes, plan for the future and keep track of the things you love.</p>
          <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-green)] p-2 px-4 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-green)] rounded hover:bg-[var(--color-yellow)]">
            <Plus />
            <span className="font-semibold text-xl">ADD WISH</span>
          </Link>
        </div>
        <div className="flex items-center justify-center bg-[var(--color-lightblue)] lg:w-1/2 w-full h-[500px] p-8 lg:rounded-r-xl rounded-b-xl">
          <Image alt="wand illustration" src="/wand.png" width={300} height={300} className="w-full max-w-[300px] object-cover"></Image>
        </div>
      </div>
      <AllFavorites />
      <div className="flex lg:flex-row flex-col w-full">
        <div className="flex text-start items-center justify-center p-8 bg-[var(--color-lightgreen)] lg:w-1/2 w-full min-h-[500px] lg:rounded-l-xl rounded-t-xl">
          <Image alt="cake illustration" src="/cake.png" width={300} height={300} className="w-full max-w-[180px] object-cover"></Image>
        </div>
        <div className="flex flex-col items-start justify-center text-start gap-10 bg-[var(--color-lightpink)] lg:w-1/2 w-full h-[500px] md:p-16 p-8 lg:rounded-r-xl rounded-b-xl">
          <h1 className="text-4xl text-start font-semibold text-[var(--color-green)]">
            <span className="bg-[var(--color-lightblue)] p-0.5">Plan</span> ahead with confidence
          </h1>
          <p className="text-lg">Never forget a gift idea or a future purchase. Keep everything organized and easy to find.</p>
          <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-green)] p-2 px-4 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-green)] rounded hover:bg-[var(--color-yellow)]">
            <Plus />
            <span className="font-semibold text-xl">GET STARTED</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};
