import { auth } from "@/auth";
import Image from "next/image";

export const Navbar = async () => {
  const session = await auth();

  return (
    <div className="w-full flex">
      <div className="flex w-full justify-between items-center p-4 m-4">
        <h2 className="text-4xl leading-none font-semibold text-[var(--color-darkgreen)]">my wishlist</h2>
        {session && (
          <div className="flex gap-2 items-center">
            <Image alt="avatar" src="/cloud.png" width={200} height={200} className="rounded-full w-[50px] aspect-[1/1] object-cover"></Image>
            <h1 className="text-xl font-semibold text-black">{session?.user?.name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
