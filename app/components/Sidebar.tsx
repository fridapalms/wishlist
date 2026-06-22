import Link from "next/link";
import { FolderHeart, ScanHeart, Tag, Receipt, Plus } from "lucide-react";
import { LogoutButton } from "./LogoutButton";
import { auth } from "@/auth";

const menuItems = [
  {
    icon: ScanHeart,
    title: "Home",
    href: "/",
  },
  {
    icon: FolderHeart,
    title: "My wishlists",
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
    <div className="bg-[var(--color-green)] flex flex-col gap-9 justify-start items-center lg:items-start pt-8 lg:p-8 text-[#353333] h-full min-h-screen">
      <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-darkred)] p-2 transition delay-150 ease-in-out bg-[var(--color-yellow)] hover:bg-[var(--color-red)]">
        <Plus />
        <span className="hidden lg:block font-semibold">ADD WISH</span>
      </Link>
      {menuItems.map((i) => {
        const Icon = i.icon;
        return (
          <Link key={i.title} href={i.href} className="flex flex-row gap-2 items-center text-[var(--color-darkred)]">
            <Icon />
            <span className="hidden lg:block">{i.title}</span>
          </Link>
        );
      })}
      {session && <LogoutButton />}
    </div>
  );
};
