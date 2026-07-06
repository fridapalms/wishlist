import Link from "next/link";
import { FolderHeart, ScanHeart, Tag, Receipt, Plus } from "lucide-react";
import { LogoutButton } from "./LogoutButton";
import { auth } from "@/auth";
import Image from "next/image";

const menuItems = [
  {
    icon: ScanHeart,
    title: "Home",
    href: "/",
  },
  {
    icon: FolderHeart,
    title: "Wishlists",
    href: "/wishlists",
  },
  {
    icon: Tag,
    title: "Categories",
    href: "/categories",
  },
  {
    icon: Receipt,
    title: "Purchased",
    href: "/purchased",
  },
];

export const Sidebar = async () => {
  const session = await auth();
  return (
    <div className="bg-[var(--color-green)] rounded-lg flex flex-col gap-6 justify-between items-center md:py-12 py-6 text-[#353333] h-full min-h-screen">
      <div className="flex flex-col gap-6">
        <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-lightyellow)] rounded hover:bg-[var(--color-darkgreen)]">
          <Plus />
          <span className="hidden xl:block font-semibold">ADD WISH</span>
        </Link>
        {menuItems.map((i) => {
          const Icon = i.icon;
          return (
            <Link key={i.title} href={i.href} className="flex flex-row gap-2 p-2 text-[var(--color-lightyellow)] hover:text-[var(--color-green)] hover:bg-[var(--color-lightyellow)] transition delay-150 ease-in-out rounded">
              <Icon />
              <span className="hidden xl:block font-medium text-md">{i.title}</span>
            </Link>
          );
        })}
        {session && <LogoutButton />}
      </div>
      <Image alt="wand illustration" src="/dandelion.png" width={100} height={100} className="w-[50px] lg:w-full max-w-[100px] object-cover "></Image>
    </div>
  );
};
