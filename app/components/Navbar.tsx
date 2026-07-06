import { auth } from "@/auth";
import Image from "next/image";

export const Navbar = async () => {
  const session = await auth();

  return (
    <div className="w-full flex p-2">
      <div className="flex w-full justify-between items-center p-4 md:m-4 m-1">
        <h2 className="md:text-4xl text-2xl leading-none font-semibold text-[var(--color-darkgreen)]">my wishlist</h2>
        {session && (
          <div className="flex gap-2 items-center">
            <Image alt="avatar" src="/cloud.png" width={200} height={200} className="rounded-full md:w-[50px] w-[30px] aspect-[1/1] object-cover"></Image>
            <h1 className="md:text-xl text-md font-semibold text-black">{session?.user?.name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
