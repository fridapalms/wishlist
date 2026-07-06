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
    <div className="bg-[var(--color-green)] rounded-lg m-4 flex flex-col gap-9 justify-start items-center pt-10 text-[#353333] h-full min-h-screen">
      <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 transition delay-150 ease-in-out border-2 border-dashed border-[var(--color-lightyellow)] rounded hover:bg-[var(--color-darkgreen)]">
        <Plus />
        <span className="hidden xl:block font-semibold">ADD WISH</span>
      </Link>
      {menuItems.map((i) => {
        const Icon = i.icon;
        return (
          <Link key={i.title} href={i.href} className="flex flex-row gap-2 text-[var(--color-lightyellow)]">
            <Icon />
            <span className="hidden xl:block font-medium text-md">{i.title}</span>
          </Link>
        );
      })}
      {session && <LogoutButton />}
    </div>
  );
};
